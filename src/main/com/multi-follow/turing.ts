/* eslint-disable no-plusplus */

import path from 'path';
import { TuringProxy } from 'com32bit-proxy';
import { app } from 'electron';
import { Turing } from '../../../../types/turing.d';

const LIB_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'lib')
  : path.join(__dirname, '../../../../lib');

const pathCom32bitExe = path.resolve(LIB_PATH, 'turing.exe');
const pathTuringDll = path.resolve(LIB_PATH, 'TURING.dll');
const pathNodeActive = path.resolve(LIB_PATH, 'node_activex.node');

const wdsZiDong = path.resolve(LIB_PATH, 'zidong.lib');
const wdsZDZD = path.resolve(LIB_PATH, 'zdzd.lib');
const bmpZiDong = path.resolve(LIB_PATH, 'zidong.bmp');

type TuringRect = [number, number, number, number];

function createTuringProxy() {
  const tp = new TuringProxy<{
    Turing: Turing;
  }>(pathCom32bitExe, pathNodeActive);
  return tp
    .exec({ pathTuringDll, wdsZiDong, wdsZDZD }, (ctx) => {
      ctx.env.Turing = ctx.createDllBridge(
        ctx.args.pathTuringDll,
        'TURING.FISR'
      );
      ctx.env.Turing.Lib_Create('宋体', 9, '自动战斗');
      ctx.env.Turing.Lib_Add(1); // 自动战斗
      ctx.env.Turing.Lib_Load(ctx.args.wdsZiDong);
      ctx.env.Turing.Lib_Add(2); // 0-9,取消,自动
      ctx.env.Turing.Lib_Load(ctx.args.wdsZDZD);
      ctx.env.Turing.Lib_Add(3); // 自/动/战/斗
    })
    .then(() => tp);
}

export async function screenAnalysis() {
  // 是否在战斗中
  const info = {
    notfind: false, // 是否检测到了游戏窗口
    inBattle: false, // 是否处于战斗
    size: [0, 0, 0, 0], // 窗口位置, 大小
    resolution: [0, 0], // 分辨率
    hp: 0, // inBattle === false 时有效
    hpButton: [-1, -1],
    mp: 0, // inBattle === false 时有效
    mpButton: [-1, -1],
    php: 0, // inBattle === false 时有效
    phpButton: [-1, -1],
    pmp: 0, // inBattle === false 时有效
    pmpButton: [-1, -1],
    leftAutoRounds: 0, // 剩余自动回合数
    addAutoRoundsButton: [-1, -1], // 自动按钮的位置
  };
  const tp = await createTuringProxy();

  const wins = await tp.exec(null, (ctx) => {
    try {
      const hwnds = ctx.env.Turing.Window_Enum('', '大话西游')
        .split('|')
        .map(Number);
      if (hwnds.length > 1) {
        const child = ctx.env.Turing.Window_EnumChild(hwnds[1], '', '大话')
          .split('|')
          .map(Number);
        if (child.length === 1) {
          return child;
        }
        if (child.length > 1) {
          return ctx.env.Turing.Window_EnumChild(child[2], '', '大话')
            .split('|')
            .map(Number);
        }
      }
      return [];
    } catch {
      return [];
    }
  });

  // 没有找到窗口
  if (wins.length === 0) {
    info.notfind = true;
  }
  if (wins.length > 0) {
    info.size = await tp.exec({ handle: wins[0] }, (ctx) => {
      ctx.env.Turing.Link(ctx.args.handle, 'gdi');
      return ctx.env.Turing.Window_GetSize().split(',').map(Number);
    });
  }

  if (
    info.size[0] < 0 ||
    info.size[1] < 0 ||
    info.size[2] < 0 ||
    info.size[3] < 0 ||
    wins.length === 0
  ) {
    info.notfind = true;
  } else {
    // 分辨率
    info.resolution = [
      info.size[2] - info.size[0],
      info.size[3] - info.size[1],
    ];
    // hp, mp 血条点击位置
    info.hpButton = [info.resolution[0] - 40, 23];
    info.mpButton = [info.resolution[0] - 40, 40];
    info.phpButton = [info.resolution[0] - 160, 17];
    info.pmpButton = [info.resolution[0] - 160, 30];
    // 谁否在战斗中
    info.inBattle = await tp.exec(
      { bmpZiDong, resolution: info.resolution },
      (ctx) => {
        const noon = '-1,-1';
        // 搜索区域
        const rect: TuringRect = [
          ctx.args.resolution[0] - 200,
          ctx.args.resolution[1] / 2,
          ctx.args.resolution[0],
          ctx.args.resolution[1],
        ];
        const r1 = ctx.env.Turing.FindImage(...rect, ctx.args.bmpZiDong, 0.9);
        if (!!r1 && r1 !== noon) {
          return true;
        }
        // 判断字体
        ctx.env.Turing.Pixel_FromScreen(...rect);
        ctx.env.Turing.Lib_Use(3);
        ctx.env.Turing.Filter_Binaryzation('00FFFF');
        ctx.env.Turing.Incise_ScopeAisle(2, 1);
        ctx.env.Turing.Incise_AutoCharData();
        const r2 = ctx.env.Turing.FindText('自动战斗', 95, 0);
        return !!r2 && r2 !== noon;
      }
    );
    // 判断回合数
    const retHuiAutoLeft = await tp.exec({ res: info.resolution }, (ctx) => {
      ctx.env.Turing.Pixel_FromScreen(0, 0, ctx.args.res[0], ctx.args.res[1]);
      ctx.env.Turing.Filter_Binaryzation('0000FF|00FF00');
      ctx.env.Turing.Incise_ScopeAisle(2, 1);
      ctx.env.Turing.Incise_AutoCharData();
      ctx.env.Turing.Lib_Use(2);
      const r1 = ctx.env.Turing.FindText('自', 95, 0);
      if (r1) {
        const [zx, zy] = r1.split(',').map(Number);
        if (zx !== -1 && zy !== -1) {
          const numberRect: TuringRect = [zx - 45, zy - 60, zx + 25, zy - 30];
          ctx.env.Turing.Filter_Tailor(...numberRect);
          return {
            left: Number(ctx.env.Turing.OCRtext()),
            button: [zx + 4, zy + 10],
          };
        }
      }
      return {
        left: 0,
        button: [-1, -1],
      };
    });
    info.leftAutoRounds = retHuiAutoLeft.left;
    info.addAutoRoundsButton = retHuiAutoLeft.button;

    // 非战斗状态下判断血量
    if (!info.inBattle) {
      const hpmp = await tp.exec({ res: info.resolution }, (ctx) => {
        const TURING = ctx.env.Turing;
        const resolution = ctx.args.res;
        // 719, 24 796,24
        const hpColor = '0000FF';
        const mpColor = 'FFFF00';

        const cutRect: TuringRect = [resolution[0] - 203, 0, resolution[0], 51];
        const sizeRect: [number, number] = [
          cutRect[2] - cutRect[0],
          cutRect[3] - cutRect[1],
        ];
        const cHpRect: TuringRect = [sizeRect[0] - 81, 24, sizeRect[0] - 4, 24];
        const cMpRect: TuringRect = [sizeRect[0] - 81, 35, sizeRect[0] - 4, 35];
        const pHpRect: TuringRect = [
          sizeRect[0] - 201,
          14,
          sizeRect[0] - 139,
          14,
        ];
        const pMpRect: TuringRect = [
          sizeRect[0] - 201,
          27,
          sizeRect[0] - 139,
          27,
        ];
        // 597, 51
        TURING.Pixel_FromScreen(...cutRect);
        TURING.Filter_Posterization(2);
        // 从右向左找
        function findColorLine(rect, y, pc) {
          const ret = [-1, -1];
          for (let i = rect[2]; i >= rect[0]; --i) {
            const color = TURING.GetPixelColor(i, y, 2);
            if (color === pc) {
              ret[0] = i;
              ret[1] = y;
              break;
            }
          }
          if (ret[0] === -1 || ret[1] === -1) return 0;
          return Math.floor(((ret[0] - rect[0]) / (rect[2] - rect[0])) * 100);
        }

        const hp = findColorLine(cHpRect, cHpRect[1], hpColor);
        const mp = findColorLine(cMpRect, cMpRect[1], mpColor);
        const php = findColorLine(pHpRect, pHpRect[1], hpColor);
        const pmp = findColorLine(pMpRect, pMpRect[1], mpColor);
        return { hp, php, mp, pmp };
      });
      info.hp = hpmp.hp;
      info.mp = hpmp.mp;
      info.php = hpmp.php;
      info.pmp = hpmp.pmp;
    }
  }

  console.log(info);
  return info;
}
export const test = async () => {
  // const tp = await createTuringProxy();
  // console.log(tp);

  // setTimeout(async () => {
  await screenAnalysis();
  // }, 4000);
};
