import Algorithm_ from './modules/alg.d';
import Sys from './modules/sys.d';
import DeCode from './modules/decode.d';
import Media from './modules/media';
import UI from './modules/ui.d';
import Screen_ from './modules/screen.d';
import Draw from './modules/draw.d';
import CF from './modules/cf.d';
import Files from './modules/files';
import CR from './modules/cr/cr.d';
import Hwnd from './modules/hwnd.d';
import KM from './modules/km.d';

export interface Turing
  extends Hwnd,
    CR,
    CF,
    Draw,
    Screen_,
    Files,
    UI,
    Media,
    Algorithm_,
    DeCode,
    KM,
    Sys {
  /**
   * 获取当前已注册的插件完整路径
   * @returns 字符串型，插件完整路径
   */
  Path(): string;
  /**
   * 当前插件版本号
   * @returns  当前插件版本号
   */
  Version(): string;
}
