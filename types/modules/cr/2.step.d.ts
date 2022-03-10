/** 文字识别（主打）步骤二 滤镜处理 */
export default interface 滤镜处理 {
  // (彩色）滤镜
  /**
		 * (针对彩色图像处理)二值化滤镜
		 * @param value 字符串型，色阶阈值（范围：0-255）
		或者：指定颜色串 BBGGRR-BDGDRD（"0000FF-000080|00FFFF"）(反色效果："@BBGGRR-DBDGDR")
		或者：通过智能筛选黑白点数均衡取得（"ai"）
		或者：通过最大类间方差法[Otsu]取得（"auto"）
		 */
  Filter_Binaryzation(value: string): void;
  /**
   * (针对彩色图像处理)灰度滤镜
   * @param mode 整数型，可选，模式（默认0:标准灰，1:PS算法灰，2:PS算法去色）
   * @returns Gray：整数型，灰色平均值
   */
  Filter_Gray(mode?: number): number;
  /**
   * (针对彩色图像处理)色调分离滤镜
   * @param value 整数型，色阶阈值（范围：2~255）
   * @returns
   */
  Filter_Posterization(value: number): void;
  /**
   * (针对彩色图像处理)指定色点数量的颜色为黑色
   * @param Kind 整数型，颜色种类数量，默认1
   * @param Num 整数型，指定颜色点数量，默认0
   * @param isMax 布尔型，是否指定最多数量的颜色，否则为最少数量，默认True
   */
  Filter_CheckPoints(Kind?: number, Num?: number, isMax?: boolean): void;
  /**
   * (针对彩色图像处理)对指定颜色的像素进行描边
   * @param Value 字符串型，指定颜色的字符（默认FFFFFF，格式：BBGGRR）
   * @param fColor 字符串型，描边颜色（默认FFFFFF，格式：BBGGRR）
   * @param bColor 字符串型，背景色（备用，默认000000）
   */
  Filter_PixelStroke(Value?: string, fColor?: string, bColor?: string): void;
  /**
   * (针对彩色图像处理)两图像数据之间的差异提取，并返回匹配到的点数
   * @param ImgData1 整数型，备份图像编号1 或者 字符串型，图像的像素数据1（格式：宽|高|图像数据）
   * @param ImgData2 整数型，备份图像编号2 或者 字符串型，图像的像素数据2（格式：宽|高|图像数据）
   * @param Similarity 整数型，颜色相似度（范围：0.1~1）
   * @param Filtrate 字符串型，可选，保留颜色（指定颜色为黑色，如：指定"FFFFFF"则白色相似的变为黑色，其他变成白色）
   * @returns ：整数型，比对匹配上的点数量（白色为不同数据）
   */
  Filter_DiffeExtract(
    ImgData1: number | ImageData,
    ImgData2: number | ImageData,
    Similarity?: number,
    Filtrate?: string
  ): number;
  /**
   * (针对彩色图像处理)两图像数据之间的相似颜色进行提取，并返回匹配到的点数
   * @param ImgData1 整数型，备份图像编号1
   * @param ImgData2 整数型，备份图像编号2
   * @param Similarity 整数型，颜色相似度（范围：0.1~1）
   * @returns 整数型，比对匹配上的相似点数量
   */
  Filter_KeepColors(
    ImgData1: number,
    ImgData2: number,
    Similarity?: number
  ): number;
  /**
   * (针对彩色图像处理)指定大小的单色块进行保留
   * @param iWidth 整数型，指定色块宽度（不能与高同时小于2）
   * @param iHeight 整数型，指定色块高度（不能与宽同时小于2）
   * @param fColor 字符串型，设置前景色（默认BBGGRR白色"FFFFFF"，为空时保留颜色）
   * @param bColor 字符串型，设置背景色（默认BBGGRR黑色"000000"）
   * @returns
   */
  Filter_BlockChoose(
    iWidth: number,
    iHeight: number,
    fColor?: string,
    bColor?: string
  ): void;

  // (黑白)滤镜
  /**
   * (针对黑白图像处理)清除杂点滤镜
   * @param Value 整数型，点数阈值（范围：1~8）
   * @param Interval 整数型，间隙，默认0
   * @param Mode 整数型，模式（默认：1去白点，0去黑点）
   * @returns
   */
  Filter_Despeckle(Value: number, Interval?: number, Mode?: number): void;
  /**
   * (针对黑白图像处理)清除杂点滤镜_增强
   * @param Num Num：整数型，点数阈值
   * @param Through Through：布尔型，是否八向，默认True
   * @param Mode 整数型，颜色模式（默认：1去白点，0去黑点）
   * @returns
   */
  Filter_DespeckleEx(Num: number, Through?: boolean, Mode?: number): void;
  /**
   * (针对黑白图像处理)保留指定大小范围的色块
   * @param Width 整数型，保留宽大小
   * @param Height 整数型，保留高大小
   * @param Through 布尔型，可选，是否穿透（默认：True穿透）
   * @returns
   */
  Filter_LeaveSize(Width: number, Height: number, Through?: boolean): void;
  /**
   * (针对黑白图像处理)去掉直线滤镜
   * @param value 整数型，点数百分比（范围：1~100）
   * @returns
   */
  Filter_EraseLine(value: number): void;
  /**
   * (针对黑白图像处理)直线检测提取滤镜
   * @param Through ：整数型，默认0，方向：0全部(含斜向)，1水平，2垂直，3横纵向
   * @param Num 整数型，默认10，直线长度点数
   * @param wValue 整数型，默认0.5，横向点数或横向百分比（范围：0.1~0.99）
   * @param hValue 整数型，默认0.5，纵向点数或纵向百分比（范围：0.1~0.99）
   * @returns
   */
  Filter_LineCheck(
    Through?: number,
    Num?: number,
    wValue?: number,
    hValue?: number
  ): void;
  /**
   * (针对黑白图像处理)获取轮廓滤镜
   * @param Value 整数型，可选，两颜色之间的差值阈值，默认0
   * @param Interval 整数型，可选，间隙距离，默认1
   * @param R 整数型，可选，R颜色分量值，默认0
   * @param G 整数型，可选，G颜色分量值，默认0
   * @param B 整数型，可选，B颜色分量值，默认0
   * @returns
   */
  Filter_Outline(
    Value?: number,
    Interval?: number,
    R?: number,
    G?: number,
    B?: number
  ): void;
  /**
   * (针对黑白图像处理)提取色块滤镜
   * @param width 整数型，色块宽度范围
   * @param height 整数型，色块高度范围
   * @param num 整数型，符合点数量
   * @returns
   */
  Filter_ExtractBlock(width: number, height: number, num: number): void;
  /**
   * (针对黑白图像处理)倾斜矫正滤镜
   * @returns
   */
  Filter_SlantCorrect(): void;
  /**
   * (针对黑白图像处理)旋转纠正滤镜(使用白点占比最大的方法)
   * @param angle 整数型，旋转的正负度数值（范围：1~90）
   * @param value 整数型，旋转的度数步进（范围：1~9）
   * @returns degree：整数型，转正的度数
   */
  Filter_RotateCorrect(angle: number, value: number): number;
  /**
   * (针对黑白图像处理)颠倒颜色滤镜
   * @param Mode 整数型，模式（默认：1白多变黑，0黑多变白，2单纯反色)
   */
  Filter_InverseColor(Mode?: number): void;
  /**
   * (针对黑白图像处理)腐蚀膨胀滤镜
   * @param Mode 整数型，模式（默认：1膨胀，0腐蚀）
   */
  Filter_DilationErosion(Mode?: number): void;
  /**
   * (针对黑白图像处理)细化抽骨(细骨)滤镜
   */
  Filter_ThinBone(): void;
  /**
   * Filter_ValidCut 裁剪有效图像
   * @param Value 字符串型，可选，裁剪方式（默认空：裁剪黑边，"auto"：四角相同颜色裁剪，可指定颜色"0000FF"）
   */
  Filter_ValidCut(Value?: string): void;
  /**
   * (针对黑白图像处理)栅栏调整滤镜
   * @param Direction 整数型，选择横列分栏时的方向
   * @param Num 整数型，间隙穿透白色干扰点数
   * @param Interval 整数型，重新摆放后的间隙距离
   */
  Filter_FenceAdjust(Direction?: number, Num?: number, Interval?: number): void;

  // (通用)滤镜
  /**
   * (通用图像处理)等比缩放滤镜
   * @param xTimes 整数型，宽度倍数，0.5缩小2倍（范围：0.1~1,2~8）
   * @param yTimes 整数型，高度倍数，0.5缩小2倍（范围：0.1~1,2~8）
   */
  Filter_Zoom(xTimes: number, yTimes: number): void;
  /**
   * (通用图像处理)缩放归一化滤镜
   * @param width 整数型，宽度数值
   * @param height 整数型，高度数值
   */
  Filter_ZoomOne(width: number, height: number): void;
  /**
   * TURING.Filter_ColorChoose(value, bColor)
   * @param value 字符串型，指定颜色串BBGGRR-BDGDRD（"0000FF-000080|00FFFF"）(反选效果："@BBGGRR-DBDGDR")
   * @param bColor 字符串型，设置背景色（默认BBGGRR黑色"000000"）
   */
  Filter_ColorChoose(value: string, bColor?: string): void;
  /**
   * (通用图像处理)图像斑点祛除
   * @param Sensitivity 整数型，周边颜色与中间颜色的差值灵敏度，默认25
   * @param Num 整数型，平均色的元素个数，默认2
   */
  Filter_DispelSpot(Sensitivity?: number, Num?: number): void;
  /**
   * (通用图像处理)右下对角点的互补颜色查找滤镜
   * @returns Colors：字符串型，互补色颜色串，竖线分隔
   */
  Filter_Complementary(): number;
  /**
   * (通用图像处理)指定任意范围对内部图像数据进行裁剪
   * @param Left 整数型，范围左上角X坐标（可以负数）
   * @param Top 整数型，范围左上角Y坐标（可以负数）
   * @param Right 整数型，范围右下角X坐标（可以超过原图大小）
   * @param Bottom 整数型，范围右下角Y坐标（可以超过原图大小）
   */
  Filter_Tailor(Left: number, Top: number, Right: number, Bottom: number): void;
  /**
   * (通用图像处理)按一定角度旋转图像
   * @param angle 整数型，旋转的正负度数值，正数顺时针（默认45，范围：正负0~360）
   */
  Filter_Rotate(angle?: number): void;
  /**
   * TURING.Filter_Mirror(Direction)
   * @param Direction 整数型，镜像的方向（默认0水平镜像，1垂直镜像，2水平和垂直同时镜像）
   */
  Filter_Mirror(Direction?: number): void;
  /**
   * (通用图像处理)指定每(行/列)的移动数量组成特征串进行扭正图像
   * @param Value 字符串型，像素移位特征串|开始行列数（移动数值：正数向左移动，负数向右移动）
   * @param Direction 整数型，像素移位方向（默认0，0水平，1垂直）
   */
  Filter_Shift(Value: string, Direction: number): void;
  /**
   * (通用图像处理)柔化指定图像（类似模糊）
   */
  Filter_Softness(): void;
  /**
   * (通用图像处理)图像中的颜色进行扩散（类似磨砂玻璃）
   */
  Filter_Diffuse(): void;
  /**
   * (通用图像处理)电影底片效果（反向颜色：RGB三种颜色分别取255的差值）
   */
  Filter_Negative(): void;
  /**
   * (通用图像处理)呈现一种暗调，对比度对比度明显的效果
   */
  Filter_DarkColor(): void;
  /**
   * (针对彩色图像处理)通道图层滤镜
   * @param model：整数型，RGB三原色（默认0:R,1:G,2:B,3:RG,4:GB,5:RB)
   */
  Filter_ChannelLayer(model?: number): void;
  /**
   * (通用图像处理)缩放自适应滤镜(内部最大缩放为2倍)
   * @param width 整数型，自适应宽度数值(内部最大缩放为2倍)
   * @param height 整数型，自适应高度数值(内部最大缩放为2倍)
   */
  Filter_ZoomAdaptive(width: number, height: number): void;
  /**
   * (通用图像处理)多张图片的颜色相似合并滤镜
   * @param iStart 整数型，开始编号，指定备份图像数据的编号
   * @param iEnd 整数型，结束编号，指定备份图像数据的编号
   */
  Filter_SimilarMerge(iStart: number, iEnd: number): void;
  /**
   * (通用图像处理)中值滤波滤镜
   * @param Value 整数型，可选，大小阈值（范围：1~3,默认：1）
   */
  Filter_Median(Value?: number): void;
  /**
   * (通用图像处理)哈哈镜/魔镜滤镜
   * @param CenterX 整数型，中心x坐标
   * @param CenterY 整数型，中心y坐标
   * @param Radius 整数型，半径
   * @param degree 小数型，仅设置挤压（凹陷）程度（默认4.5）
   * @param Model 布尔型，凹凸模式选择（默认True凸）
   */
  Filter_MagicMirror(
    CenterX: number,
    CenterY: number,
    Radius?: number,
    degree?: number,
    Model?: boolean
  ): void;

  /**
   * (针对彩色图像处理)提取HSV色彩空间滤镜
   * @param H 字符串型，色相范围("0-360")，多个范围竖线“|”隔开
   * @param S 字符串型，饱和度范围("0-100")，多个范围竖线“|”隔开
   * @param V 字符串型，亮度范围("0-100")，多个范围竖线“|”隔开
   * @param Flag 字符串型，是否保留颜色（默认保留True）
   */
  Filter_ColorSpaceHSV(H: string, S: string, V: string, Flag?: boolean): void;

  /**
   * (针对彩色图像处理)提取RGB色彩空间滤镜
   * @param R 字符串型，红色分量范围("0-255")，多个范围竖线“|”隔开
   * @param G 字符串型，绿色分量范围("0-255")，多个范围竖线“|”隔开
   * @param B 字符串型，蓝色分量范围("0-255")，多个范围竖线“|”隔开
   * @param Flag 字符串型，是否保留颜色（默认保留True）
   */
  Filter_ColorSpaceRGB(R: string, G: string, B: string, Flag?: boolean): void;
}
