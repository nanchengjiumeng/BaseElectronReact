/** 屏幕打印（预览） */
export default interface 屏幕打印 {
  /**
   * 直接在屏幕上打印图像像素数据
   * @param x：整数型，可选，屏幕X坐标(默认0)
   * @param y：整数型，可选，屏幕X坐标(默认0)
   * @returns 无
   */
  Screen_PrintImage(x?: number, y?: number): void;
  /**
   * 直接在屏幕上打印文字内容
   * @param Text：字符串型，文字内容
   * @param x：整数型，可选，屏幕X坐标(默认0)<br>
   * @param y：整数型，可选，屏幕X坐标(默认0)<br>
   * @param FBcolor：字符串型，可选，文字颜色|背景色(默认"0000FF|000000")<br>
   * @param FontNameSize：字符串型，可选，字体名称|字号大小(默认"宋体|9")<br>
   * @param Mode：字符串型，可选，字体样式和精度，默认："0|0"(格式：模式<0正常，1粗体，2斜体，4下划线，8删除线。其他依次叠加数字>|精度<0抗锯齿，1清晰>)
   * @returns 无
   */
  Screen_PrintText(
    Text: string,
    x?: number,
    y?: number,
    FBcolor?: string,
    FontNameSize?: string,
    Mode?: string
  ): void;
  /**
   * 对屏幕上显示的打印内容进行强制刷新清除
   * @param 无
   * @returns 无
   */
  Screen_Refresh(): void;

  Display_Open(): void;

  Display_Close(): void;

  Display_Show(text: string): void;
}
