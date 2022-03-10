/** 系统信息（设备） */
export default interface 系统信息 {
  /**
   * 获取系统从开机到现在所经过的时间
   * @param 无
   * @returns iTime：整数型，毫秒时间
   */
  GetTime(): number;
  /**
   * 获取网络时间
   * @param url：字符串型，可选，网站地址(如果不能正常获得网络时间，填写可用的网站地址)
   * @returns iTime：字符串型，在线网络时间
   */
  GetNetworkTime(url?: string): string;
  /**
   * 得到第一块硬盘的唯一型号
   * @param 无
   * @returns SN：字符串型，硬盘唯一型号
   */
  GetHDSN(): string;
  /**
   * 进行物理内存垃圾清理
   * @param 无
   * @returns 无
   */
  Memory_Clear(): void;
  /**
   * 获取物理内存相关信息
   * @param 无
   * @returns Info：字符串型，获取内存信息（总共物理内存KB|可用物理内存KB|已用内存比率%）
   */
  Memory_GetInfo(): string;
}
