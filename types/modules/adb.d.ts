/** 桥接调试(安卓) */
export interface ADB {
  /**
   * 查看所有设备名称（用于多设备时切换）
   * @param Serial：整数型，可选，设备序号（默认0:所有设备）
   * @returns DevicesIdS：字符串型，设备名称（格式：设备名称|设备名称|…）
   */
  Adb_Devices(Serial?: number): string;
  /**
   * 在当前窗口中输入文字
   * @param Text：字符串型，输入内容（仅支持英文、标点符号和数字）
   * @returns 无
   */
  Adb_InputText(Text: string): void;
  /**
   * 模拟键盘按键响应操作
   * @param Key：整数型，键码
   * @returns 无
   */
  Adb_KeyEvent(Key: number): void;
  /**
   * 运行ADB命令之前必须关联ADB调试桥
   * @param AdbPath：字符串型，ADB完整路径（可以是雷电模拟器路径下的adb.exe）
   * @param DevicesId：字符串型，可选，设备名称（默认空:为第一个设备）
   * @returns 无
   */
  Adb_Link(AdbPath: string, DevicesId?: string): void;
  /**
   * 获取设备屏幕指定范围的图像像素数据
   * @param left：整数型，屏幕左上角X坐标
   * @param top：整数型，屏幕左上角Y坐标<br>
   * @param right：整数型，屏幕右下角X坐标<br>
   * @param bottom：整数型，屏幕右下角Y坐标<br>
   * @param Mode：整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
   * @returns 无
   */
  Adb_Screencap(
    left: number,
    top: number,
    right: number,
    bottom: number,
    Mode?: number
  ): void;
  /**
   * 模拟手指在屏幕上的划动操作
   * @param x1：整数型，起点屏幕X1坐标
   * @param y1：整数型，起点屏幕Y1坐标<br>
   * @param x2：整数型，终点屏幕X2坐标<br>
   * @param y2：整数型，终点屏幕Y2坐标
   * @returns 无
   */
  Adb_Swipe(x1: number, y1: number, x2: number, y2: number): void;
  /**
   * 模拟短暂的点击操作
   * @param x：整数型，设备屏幕X坐标
   * @param y：整数型，设备屏幕Y坐标
   * @returns 无
   */
  Adb_Tap(x: number, y: number): void;
}
