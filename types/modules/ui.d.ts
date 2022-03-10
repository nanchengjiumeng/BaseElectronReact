/** 用户交互（界面） */
export default interface 用户交互 {
  /**
   * 在屏幕上按住鼠标左键框选区域（及宽高）
   * @param 无
   * @returns ret：字符串型，[左,上,右,下|宽,高]
   */
  UI_Area(): string;
  /**
   * 在屏幕中间弹出可输入内容对话框
   * @param Content：字符串型，提示内容
   * @param Title：字符串型，窗口标题<br>
   * @param Default：字符串型，可选，填写输入框中的默认值<br>
   * @param Timeout：整数型，可选，默认0，时间等待（单位秒）<br>
   * @param x：整数型，可选，默认居中-1，屏幕X坐标<br>
   * @param y：整数型，可选，默认居中-1，屏幕Y坐标
   * @returns ret：字符串型，输入框中的内容
   */
  UI_InputBox(
    Content: string,
    Title: string,
    Default?: string,
    Timeout?: number,
    x?: number,
    y?: number
  ): string;
  /**
   * 在屏幕中间弹出提示对话框
   * @param Content：字符串型，提示内容
   * @param Title：字符串型，窗口标题<br>
   * @param iStyle：整数型，可选，默认1，对话框样式(1确定，2是否，3中止重试忽略，4是否取消，5重试取消，6确定取消)<br>
   * @param Timeout：整数型，可选，默认0，时间等待（单位秒）<br>
   * @param x：整数型，可选，默认居中-1，屏幕X坐标<br>
   * @param y：整数型，可选，默认居中-1，屏幕Y坐标
   * @returns ret：字符串型，按钮编号(1确定，2取消，3中止，4重试，5忽略，6是，7否)
   */
  UI_MsgBox(
    Content: string,
    Title: string,
    iStyle?: number,
    Timeout?: number,
    x?: number,
    y?: number
  ): string;
  /**
   * 抓取屏幕坐标与颜色值（及窗口客户区坐标和RGB分量）
   * @param 无
   * @returns ret：字符串型，[x坐标,y坐标,16进制颜色值|窗口客户区x坐标,y坐标,句柄|R分量,G分量,B分量]
   */
  UI_Zoom(): string;
}
