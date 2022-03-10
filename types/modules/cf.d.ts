/** 图色查找（优秀） */
export default interface 图色查找 {
  /**
   * 得到屏幕指定位置点的颜色
   * @param x：整数型，屏幕X坐标
   * @param y：整数型，屏幕Y坐标
   * @param mode：整数型，取色模式（默认0：普通取色，1：增强取色（半透明窗体），2：取内部图像数据颜色）
   * @returns color：字符串型，16进制颜色值
   */
  GetPixelColor(x: number, y: number, mode: number): string;

  /**
   * 获取圆形边上一个点颜色
   * @param x 整数型，圆心X坐标
   * @param y 整数型，圆心Y坐标
   * @param Radius 整数型，可选，默认0，圆的半径
   * @param Degree 整数型，可选，默认0，旋转度数（顺时针，指北0度！）
   * @param Model 整数型，取色模式（默认0：普通取色，1：增强取色（半透明窗体），2：取内部图像数据颜色）
   * @returns color：字符串型，16进制颜色值
   */
  GetRoundPointColor(
    x: number,
    y: number,
    Radius?: number,
    Degree?: number,
    Model?: number
  ): string;
  /**
   * 获取圆形边上一个点坐标
   * @param x 整数型，圆心X坐标
   * @param y 整数型，圆心Y坐标
   * @param Radius 整数型，可选，默认0，圆的半径
   * @param Degree 整数型，可选，默认0，旋转度数（顺时针，指北0度！）
   * @returns [坐标，字符串型，格式：x,y] x：返回X坐标 y：返回Y坐标
   */
  GetRoundPoint(x: number, y: number, Radius?: number, Degree?: number): string;
  /**
   * 对二维多边形的图形进行识别（体验版）
   * @param distance：整数型，两顶点之间的距离
   * @param length：整数型，两顶点之间的线条长度
   * @returns shape：字符串型，图形名称（三角形、多边形、矩形和圆形）
   */
  FindShape(distance: number, length: number): string;
  /**
   * 屏幕指定区域内查找多个颜色及多个坐标
   * @param left：整数型，屏幕左上角X坐标
   * @param top：整数型，屏幕左上角Y坐标
   * @param right：整数型，屏幕右下角X坐标
   * @param bottom：整数型，屏幕右下角Y坐标
   * @param colorS：字符串型，16进制颜色值，多色用竖线|分隔
   * @param direction：整数型，查找方向（0从左上往右下，1从左下往右上，2从右上往左下，3从右下往左上，4从上左往下右，5从上右往下左，6从下左往上右，7从下右往上左）
   * @param similarity：整数型，颜色相似度（范围：0.1~1）
   * @returns  [坐标，格式：x,y|x,y|…] xyS：返回屏幕多个坐标（格式：x坐标,y坐标|x坐标,y坐标|…）
   */
  FindColorExS(
    left: number,
    top: number,
    right: number,
    bottom: number,
    colorS: string,
    direction: number,
    similarity: number
  ): string;
  /**
		* 屏幕区域内查找指定大小并且符合颜色串点数量的色块
		* @param left：整数型，屏幕左上角X坐标
		* @param top：整数型，屏幕左上角Y坐标<br>
		* @param right：整数型，屏幕右下角X坐标<br>
		* @param bottom：整数型，屏幕右下角Y坐标<br>
		* @param scolor：字符串型，符合的颜色串（格式：0000FF-101010|00FF00），多个颜色竖线分隔，支持偏色<br>
		* @param w：整数型，指定宽度<br>
		* @param h：整数型，指定高度<br>
		* @param n：整数型，指定点数量或相似度(0.1~1.0)
			* @returns [坐标，格式：x,y]
		x：返回屏幕X坐标<br>
		y：返回屏幕Y坐标
	*/
  FindColorBlock(
    left: number,
    top: number,
    right: number,
    bottom: number,
    scolor: string,
    w: number,
    h: number,
    n: number
  ): string;
  /**
		* 屏幕指定区域内查找多点颜色
		* @param left：整数型，屏幕左上角X坐标
		* @param top：整数型，屏幕左上角Y坐标<br>
		* @param right：整数型，屏幕右下角X坐标<br>
		* @param bottom：整数型，屏幕右下角Y坐标<br>
		* @param color：字符串型，16进制首个颜色值(支持偏色,格式:BBGGR-DBDGDR）)<br>
		* @param offsetColorS：字符串型，偏移颜色串(支持偏色,格式:DX|DY|BBGGR-DBDGDR)<br>
		* @param similarity：整数型型，颜色相似度（范围：0.1~1.0）
		* @returns {string} [坐标，格式：x,y]
			x：返回首个颜色的屏幕X坐标<br>
			y：返回首个颜色的屏幕Y坐标
	*/
  FindMultiColor(
    left: number,
    top: number,
    right: number,
    bottom: number,
    color: string,
    offsetColorS: string,
    similarity: number
  ): string;
  /**
		* 屏幕指定区域内查找图片（同按键精灵）
		* @param left：整数型，屏幕左上角X坐标
		* @param top：整数型，屏幕左上角Y坐标<br>
		* @param right：整数型，屏幕右下角X坐标<br>
		* @param bottom：整数型，屏幕右下角Y坐标<br>
		* @param ImagePath：字符串型，需要查找的图片路径<br>
		* @param similarity：整数型，颜色相似度（范围：0.1~1）/字符串型,颜色偏色值（范围：000000~FFFFFF）
		* @returns [坐标，格式：x,y]
			x：返回屏幕X坐标<br>
			y：返回屏幕Y坐标
	 */
  FindImage(
    left: number,
    top: number,
    right: number,
    bottom: number,
    ImagePath: string,
    similarity: number
  ): string;
  /**
		* 屏幕指定区域内查找图片的所有坐标
		* @param left：整数型，屏幕左上角X坐标
		* @param top：整数型，屏幕左上角Y坐标<br>
		* @param right：整数型，屏幕右下角X坐标<br>
		* @param bottom：整数型，屏幕右下角Y坐标<br>
		* @param ImagePath：字符串型，需要查找的图片路径<br>
		* @param similarity：整数型，颜色相似度（范围：0.1~1）/字符串型,颜色偏色值（范围：000000~FFFFFF）
		* @returns [坐标，格式：x,y|x,y|…]
			xyS：返回屏幕多个坐标（格式：x坐标,y坐标|x坐标,y坐标|…），失败-1,-1
	*/
  FindImageS(
    left: number,
    top: number,
    right: number,
    bottom: number,
    ImagePath: string,
    similarity: number
  ): string;
  /**
		* 屏幕指定区域内查找所有图片的其中一张
		* @param left：整数型，屏幕左上角X坐标
		* @param top：整数型，屏幕左上角Y坐标<br>
		* @param right：整数型，屏幕右下角X坐标<br>
		* @param bottom：整数型，屏幕右下角Y坐标<br>
		* @param ImagePathS：字符串型，需要查找的图片路径，多图用竖线|分隔
		* @param similarity：整数型，颜色相似度（范围：0.1~1）字符串型,颜色偏色值（范围：000000~FFFFFF）
		* @returns [坐标，格式：id,x,y]
			id：图片标识号，从0开始<br>
			x：返回屏幕X坐标<br>
			y：返回屏幕Y坐标
	 */
  FindImageEx(
    left: number,
    top: number,
    right: number,
    bottom: number,
    ImagePathS: string,
    similarity: number
  ): string;
  /**
		* 屏幕指定区域内查找所有图片的每一张图的所有坐标
		* @param left：整数型，屏幕左上角X坐标
		* @param top：整数型，屏幕左上角Y坐标<br>
		* @param right：整数型，屏幕右下角X坐标<br>
		* @param bottom：整数型，屏幕右下角Y坐标<br>
		* @param ImagePathS：字符串型，需要查找的图片路径，多图用竖线|分隔
		* @param similarity：整数型，颜色相似度（范围：0.1~1） 字符串型,颜色偏色值（范围：000000~FFFFFF）
		* @returns [坐标，格式：id,x,y|id,x,y|…]
			idxyS：返回屏幕多个坐标（格式：id图片标识,x坐标,y坐标|id图片标识,x坐标,y坐标|…）
	 */
  FindImageExS(
    left: number,
    top: number,
    right: number,
    bottom: number,
    ImagePathS: string,
    similarity: number
  ): string;
  /**
   * 获取当前鼠标光标的形状特征码
   * @param Mode：整数型，特征方式(默认0:方式1，1:方式2)
   * @returns shape：整数型，鼠标特征码
   */
  FindMouseShape(Mode: number): number;
  /**
   * 统计内部图像数据上的颜色点数量
   * @param Color：字符串型，指定统计的颜色串BBGGRR-BDGDRD（例："0000FF-000080|00FFFF"）
   * @returns Num：整数型，颜色点数量
   */
  CountColorNum(Color: string): number;
  /**
   * 统计内部图像数据上的每一种颜色点数量
   * @param Mode：字符串型，指定颜色格式（默认：BGR，RGB，HSV：H.S.V）
   * @returns Nums：字符串型，每种颜色点数量（数量：从大到小排序）
   */
  GetColorPoints(Mode: string): string;
  /**
   * 获取指定范围内所有颜色的均值（支持图中图）
   * @param left：整数型，屏幕左上角X坐标
   * @param top：整数型，屏幕左上角Y坐标<br>
   * @param right：整数型，屏幕右下角X坐标<br>
   * @param bottom：整数型，屏幕右下角Y坐标
   * @returns sColor：字符串型，16进制颜色值（格式：BBGGRR）
   */
  GetAveRGB(left: number, top: number, right: number, bottom: number): string;
  /**
   * BGR格式与RGB格式互相转换颜色空间
   * @param color1：字符串型，16进制颜色值
   * @returns color2：字符串型，16进制颜色值
   */
  BGRvsRGB(Color1: string): string;
  /**
   * HSV转换为RGB空间颜色值
   * @param H：整数型，颜色H分量
   * @param S：整数型，颜色S分量<br>
   * @param V：整数型，颜色V分量
   * @returns color：字符串型，16进制颜色值（格式：BBGGRR）
   */
  HSVtoRGB(H: number, S: number, V: number): string;
  /**
		* 16进制颜色值分解为RGB分量
		* @param color：字符串型，16进制颜色值（格式：BBGGRR）
		* @returns [RGB颜色，格式：R,G,B]
			R：返回颜色R分量<br>
			G：返回颜色G分量<br>
			B：返回颜色B分量
	 */
  ToRGB(color: string): string;
  /**
   * RGB颜色分量合并为16进制颜色值（格式：BBGGRR）
   * @param R：整数型，颜色R分量（范围：0~255）
   * @param G：整数型，颜色G分量（范围：0~255）<br>
   * @param B：整数型，颜色B分量（范围：0~255）
   * @returns color：字符串型，16进制颜色值（格式：BBGGRR）
   */
  ToColor(R: number, G: number, B: number): string;
  /**
   * 得到指定的16进制颜色值的中文名称
   * @param sColor：字符串型，16进制颜色值（格式：BBGGRR）
   * @returns Name：字符串型，16进制颜色值的中文名称（黑、灰、白、红、橙、黄、绿、青、蓝、紫）
   */
  ToColorName(sColor: string): string;
  /**
   * 计算两颜色相似程度
   * @param color1：字符串型，16进制颜色值1（格式：BBGGRR）
   * @param color2：字符串型，16进制颜色值2（格式：BBGGRR）
   * @returns Num：小数型，颜色相似程度（最相似100,不相似为0）
   */
  ColorSimilarity(color1: string, color2: string): number;
}
