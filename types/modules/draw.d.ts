/** 绘画图形（特效） */
export default interface 绘画图形 {
  /**
   * 在内部的图像数据上画一个箭头
   * @param x1：整数型，起点X坐标
   * @param y1：整数型，起点Y坐标<br>
   * @param x2：整数型，终点X坐标<br>
   * @param y2：整数型，终点Y坐标<br>
   * @param size：整数型，可选，箭头大小，默认16<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值<br>
   * @param Full:布尔型，可选，默认False，填充实心为True<br>
   * @param Alpha:整数型，可选，透明度（默认100不透明，需要填充实心才能生效）
   * @returns 无
   */
  Draw_Arrow(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    size?: number,
    R?: number,
    G?: number,
    B?: number,
    Full?: boolean,
    Alpha?: number
  ): void;
  /**
   * 【存储】将内部的各种模式的图像数据进行备份（最终为备份数据）
   * @param Serial：整数型，备份编号（范围：1~4096）
   * @param Mode：整数型，模式（默认0：内部图像数据，1：图中图数据，2：绘图数据）
   * @returns 无
   */
  Draw_Backups(Serial: number, Mode: number): void;
  /**
   * 在内部的图像数据上画一个实心矩形方块
   * @param left：整数型，左上角X坐标
   * @param top：整数型，左上角Y坐标<br>
   * @param right：整数型，右下角X坐标<br>
   * @param bottom：整数型，右下角Y坐标<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值<br>
   * @param Alpha:整数型，可选，透明度（默认100不透明）
   * @returns 无
   */
  Draw_Block(
    left: number,
    top: number,
    right: number,
    bottom: number,
    R?: number,
    G?: number,
    B?: number,
    Alpha?: number
  ): void;
  /**
		* 随机生成一个数学（加减乘）计算的验证码
					
		* @param 无
		* @returns Num：整数型，返回验证码中计算的结果
	 */
  Draw_CAPTCHA(): number;
  /**
   * 在内部的图像数据上画一个圆形
   * @param x：整数型，圆心X坐标
   * @param y：整数型，圆心Y坐标<br>
   * @param Radius：整数型，圆的半径<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值<br>
   * @param Full:布尔型，可选，默认False，填充实心为True<br>
   * @param Alpha:整数型，可选，透明度（默认100不透明，需要填充实心才能生效）
   * @returns 无
   */
  Draw_Circle(
    x: number,
    y: number,
    Radius: number,
    R?: number,
    G?: number,
    B?: number,
    Full?: boolean,
    Alpha?: number
  ): void;
  /**
   * 创建一个空白的内部图像数据的画布
   * @param Width：整数型，画布的宽度
   * @param Height：整数型，画布的高度<br>
   * @param R：整数型，可选，默认0，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值
   * @returns 无
   */
  Draw_CreateCanvas(
    Width: number,
    Height: number,
    R?: number,
    G?: number,
    B?: number
  ): void;
  /**
   * 在内部的图像数据上画一条直线虚线
   * @param x1：整数型，起点X坐标
   * @param y1：整数型，起点Y坐标<br>
   * @param x2：整数型，终点X坐标<br>
   * @param y2：整数型，终点Y坐标<br>
   * @param Length：整数型，长度<br>
   * @param Interval：整数型，间隙<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值
   * @returns 无
   */
  Draw_DottedLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    Length: number,
    Interval: number,
    R?: number,
    G?: number,
    B?: number
  ): void;
  /**
   * 在内部的图像数据上画一个椭圆形
   * @param x：整数型，圆心X坐标
   * @param y：整数型，圆心Y坐标<br>
   * @param wRadius：整数型，椭圆的宽半径<br>
   * @param hRadius：整数型，椭圆的高半径<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值<br>
   * @param Full:布尔型，可选，默认False，填充实心为True<br>
   * @param Alpha:整数型，可选，透明度（默认100不透明，需要填充实心才能生效）
   * @returns 无
   */
  Draw_Ellipse(
    x: number,
    y: number,
    wRadius: number,
    hRadius: number,
    R?: number,
    G?: number,
    B?: number,
    Full?: number,
    Alpha?: number
  ): void;
  /**
   * 在内部的图像数据上对指定坐标开始进行颜色填充
   * @param x：整数型，开始X坐标
   * @param y：整数型，开始Y坐标<br>
   * @param Through：布尔型，可选，是否八向,默认False<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值
   * @returns Area：字符串型，返回填充区域范围（格式：左,上,右,下）
   */
  Draw_Fill(
    x: number,
    y: number,
    Through?: boolean,
    R?: number,
    G?: number,
    B?: number
  ): string;
  /**
   * 在内部的图像数据上画一个爱心
   * @param x：整数型，左上X坐标
   * @param y：整数型，左上Y坐标<br>
   * @param w：整数型，宽度<br>
   * @param h：整数型，高度<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值<br>
   * @param Full:布尔型，可选，默认False，填充实心为True<br>
   * @param Alpha:整数型，可选，透明度（默认100不透明，需要填充实心才能生效）
   * @returns 无
   */
  Draw_Heart(
    x: number,
    y: number,
    w: number,
    h: number,
    R?: number,
    G?: number,
    B?: number,
    Full?: number,
    Alpha?: number
  ): void;
  /**
   * 在内部的图像数据上进行绘制图片图像
   * @param x：整数型，X坐标
   * @param y：整数型，Y坐标<br>
   * @param FilePath：字符串型，可选，图片路径（为空""时，使用的是内部绘图数据）<br>
   * @param Alpha:整数型，可选，透明度（默认100不透明）
   * @returns 无
   */
  Draw_Image(x: number, y: number, FilePath?: string, Alpha?: number): void;
  /**
   * 在内部的图像数据上画一条直线
   * @param x1：整数型，起点X坐标
   * @param y1：整数型，起点Y坐标<br>
   * @param x2：整数型，终点X坐标<br>
   * @param y2：整数型，终点Y坐标<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值
   * @returns 无
   */
  Draw_Line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    R?: number,
    G?: number,
    B?: number
  ): void;
  /**
   * 在内部的图像数据上画了一个点
   * @param x：整数型，X坐标
   * @param y：整数型，Y坐标<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值
   * @returns 无
   */
  Draw_Point(x: number, y: number, R?: number, G?: number, B?: number): void;
  /**
   * 【覆盖】恢复内部的备份图像数据为其他模式的数据
   * @param Serial：整数型，备份编号（范围：1~4096）
   * @param Mode：整数型，模式（默认0：内部图像数据，1：图中图数据，2：绘图数据）
   * @returns 无
   */
  Draw_Recover(Serial: number, Mode: number): void;
  /**
   * 在内部的图像数据上画一个矩形框
   * @param left：整数型，左上角X坐标
   * @param top：整数型，左上角Y坐标<br>
   * @param right：整数型，右下角X坐标<br>
   * @param bottom：整数型，右下角Y坐标<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值
   * @returns 无
   */
  Draw_Rectangle(
    left: number,
    top: number,
    right: number,
    bottom: number,
    R?: number,
    G?: number,
    B?: number
  ): void;
  /**
   * 在内部的图像数据上进行打字文本内容
   * @param x：整数型，X坐标
   * @param y：整数型，Y坐标<br>
   * @param Text：字符串型，打字文本内容<br>
   * @param Mode：字符串型，可选，样式，默认："宋体|9|0|0"（格式：字体|字号|模式<0正常，1粗体，2斜体，4下划线，8删除线。其他依次叠加数字>|精度<0抗锯齿，1清晰>）<br>
   * @param R：整数型，可选，默认255，10进制红色分量值<br>
   * @param G：整数型，可选，默认0，10进制绿色分量值<br>
   * @param B：整数型，可选，默认0，10进制蓝色分量值
   * @returns 无
   */
  Draw_Text(
    x: number,
    y: number,
    Text: string,
    Mode?: string,
    R?: number,
    G?: number,
    B?: number
  ): void;
  /**
   * 在内部的图像数据上画在圆形边上一个点
   * @param x 整数型，圆心X坐标
   * @param y 整数型，圆心Y坐标
   * @param Radius 整数型，可选，默认0，圆的半径
   * @param Degree 整数型，可选，默认0，旋转度数（顺时针，指北0度！）
   * @param Size 整数型，可选，默认1，画点大小
   * @param R 整数型，可选，默认255，10进制红色分量值
   * @param G 整数型，可选，默认0，10进制绿色分量值
   * @param B 整数型，可选，默认0，10进制蓝色分量值
   * @param Full 布尔型，可选，默认False，填充实心为True
   * @param Alpha 可选，透明度（默认100不透明，需要填充实心才能生效）
   * @returns [x坐标,y坐标]：字符串型，返回画点的坐标
   */
  Draw_RoundPoint(
    x: number,
    y: number,
    Radius?: number,
    Degree?: number,
    Size?: number,
    R?: number,
    G?: number,
    B?: number,
    Full?: boolean,
    Alpha?: number
  ): string;
}
