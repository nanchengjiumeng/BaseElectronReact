/** 数学统计（算法） */
export default interface 数学统计 {
  /**
		* 计算图像中颜色最小的区域范围
		* @param 无
		* @returns [坐标]
			x：返回X坐标
			y：返回Y坐标
	 */
  Different(): string;
  /**
   * 评价图像清晰度（对图像进行差平方的统计）
   * @param 无
   * @returns num：整数型，清晰度数值
   */
  EvalVariance(): number;
  /**
   * 获取内部图像的有效区域范围
   * @param 无
   * @returns Area：字符串型，有效图像数据的范围（格式：左,上,右,下）
   */
  GetValidArea(): string;
  /**
   * 角度计算，指北为0度
   * @param aX：整数型，圆心点x
   * @param aY：整数型，圆心点y
   * @param bX：整数型，移动点x
   * @param bY：整数型，移动点y
   * @returns Angle：整数型，角度（指北为0度）
   */
  AngleCalc(aX: number, aY: number, bX: number, bY: number): number;
  /**
   * 指定的坐标进行坐标系的旋转
   * @param qx：整数型，x坐标
   * @param qy：整数型，y坐标
   * @param sWidth：整数型，可选，屏幕宽度（默认0）
   * @param sHeight：整数型，可选，屏幕高度（默认0）
   * @param degree：整数型，可选，旋转角度（默认270，支持：0,90,180,270,-90）
   * @returns [newX,newY]：字符串型，新的坐标(可以使用Split、Clng进行坐标拆分和转整数)
   */
  xyRotate(
    qx: number,
    qy: number,
    sWidth?: number,
    sHeight?: number,
    degree?: number
  ): string;
  /**
   * 生成贝塞尔曲线轨迹数据
   * @param coordinates：字符串型，坐标节点(格式："x坐标,y坐标|x坐标,y坐标|…")
   * @param stepping：小数型，步进
   * @returns Pos：字符串型，曲线上所有坐标（格式：x坐标,y坐标-x坐标,y坐标…）
   */
  BezierCurve(coordinates: string, stepping: number): string;
  /**
   * 获取两点间的直线上所有坐标
   * @param x1：整数型，起点X坐标
   * @param y1：整数型，起点Y坐标
   * @param x2：整数型，终点X坐标
   * @param y2：整数型，终点Y坐标
   * @returns AllPos：字符串型，直线上所有坐标（格式:x坐标,y坐标|x坐标,y坐标|…）
   */
  GetLineAllPos(x1: number, y1: number, x2: number, y2: number): string;
  /**
	* 获取内部图像数据上的所有端点之间的线条坐标
		【注意】需要配合“GetAllPoints 获取所有端点坐标”命令使用
	* @param Value：整数型，可选，阈值（默认7，1~上限8）
	* @param Num：整数型，可选，像素点数量（大于此数量保留坐标）
	* @returns Pos：字符串型，线条上所有坐标（格式:x坐标,y坐标-x坐标,y坐标…）
 */
  GetAllLines(Value?: number, Num?: number): string;
  /**
   * 获取内部图像数据上的所有认为是端点的坐标
   * @param Value：整数型，可选，阈值（默认7，1~上限8）
   * @returns Pos：字符串型，所有端点的坐标（格式:x坐标,y坐标|…）
   */
  GetAllPoints(Value?: number): string;
  /**
   * 获取内部图像数据上的指定两端点之间的线条坐标
   * @param x1：整数型，起点X坐标
   * @param y1：整数型，起点Y坐标
   * @param x2：整数型，终点X坐标(最大分辨率为2000像素)
   * @param y2：整数型，终点Y坐标(最大分辨率为2000像素)
   * @returns Pos：字符串型，线条上所有坐标（格式:x坐标,y坐标-x坐标,y坐标…）
   */
  GetOneLine(x1: number, y1: number, x2: number, y2: number): string;
  /**
   * 获取两条件直线相交的坐标（理论上的相交线）
   * @param ax1：整数型，第1条线起点X坐标
   * @param ay1：整数型，第1条线起点Y坐标
   * @param ax2：整数型，第1条线终点X坐标
   * @param ay2：整数型，第1条线终点Y坐标
   * @param bx1：整数型，第2条线起点X坐标
   * @param by1：整数型，第2条线起点Y坐标
   * @param bx2：整数型，第2条线终点X坐标
   * @param by2：整数型，第2条线终点Y坐标
   * @returns Pos：字符串型，两线相交的坐标（格式:x坐标,y坐标）
   */
  TwoLinesCrossPos(
    ax1: number,
    ay1: number,
    ax2: number,
    ay2: number,
    bx1: number,
    by1: number,
    bx2: number,
    by2: number
  ): string;
}
