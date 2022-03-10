export type Version = string;
/**
 * 字符串型，可选，关联模式。
	 默认：普通窗口后台"normal"，
	 普通前台窗口"window"，
	 3D游戏窗口后台"gdi"(切换主题为Aero再试)，
	 Aero主题缩略图后台"aero"，
	后台键鼠模式"km"。
*/
// eslint-disable-next-line @typescript-eslint/naming-convention
export type mode =
  | 'normal'
  | 'window'
  | 'gdi'
  | 'aero'
  | 'km'
  | 'normal|km'
  | 'window|km'
  | 'gdi|km'
  | 'aero|km';
