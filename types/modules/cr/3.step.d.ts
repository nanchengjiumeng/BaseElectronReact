/** 文字识别（主打）步骤三 字符切割 */
export default interface 字符切割 {
  /**
   * 固定位置字符切割
   * @param qx qx：整数型，起点X坐标
   * @param qy qy：整数型，起点Y坐标
   * @param width width：整数型，字符宽度
   * @param height height：整数型，字符高度
   * @param Column Column：整数型，可选，列字间距，默认0
   * @param cNum cNum：整数型，可选，列字符数量，默认1
   * @param Row Row：整数型，可选，行字间距，默认0
   * @param rNum rNum：整数型，可选，行字符数量，默认1
   * @returns CharNum：整数型，字符切割数量(最大下标值)
   */
  Incise_FixedLocation(
    qx: number,
    qy: number,
    width: number,
    height: number,
    Column?: number,
    cNum?: number,
    Row?: number,
    rNum?: number
  ): number;
  /**
   * 随机方位字符切割
   * @param through 整数型，可选，穿透点数（默认0，指定点数：为大于点数时能够穿透切割）
   * @param Width 字符串型，可选，保留字符切割宽度范围（例："50-150"）。
   * @param Height 字符串型，可选，保留字符切割高度范围（例："30-100"）。
   * @returns CharNum：整数型，字符切割数量(最大下标值)
   */
  Incise_RandomOrientation(
    through?: number,
    Width?: number,
    Height?: number
  ): number;
  /**
   * 连通区域字符切割
   * @param through 布尔型，是否八通方向（八向：True）
   * @param Width 字符串型，可选，保留字符切割宽度范围（例："50-150"）。
   * @param Height 字符串型，可选，保留字符切割高度范围（例："30-100"）。
   * @returns 整数型，字符切割数量(最大下标值)
   */
  Incise_ConnectedArea(
    through: boolean,
    Width?: string,
    Height?: string
  ): number;
  /**
   * 范围投影字符切割
   * @param Row   Row：整数型，行间隙（横向，最小值）
   * @param Column Column：整数型，列间隙（纵向，最小值）
   * @param Width Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）。
   * @param Height Height：字符串型，可选，保留字符切割高度范围（例："30-100"）。
   * @param Flag Flag：整数型，可选，排序规则（默认0书写顺序，1从左到右，2换行功能）
   * @returns 整数型，字符切割数量(最大下标值)
   */
  Incise_ScopeAisle(
    Row: number,
    Column: number,
    Width?: string,
    Height?: string,
    Flag?: number
  ): number;
  /**
   * 颜色分层字符切割（体验版--组合式）
   * @param interval interval：整数型，颜色值之间的距离
   * @param num num：整数型，过滤掉点数的数量
   * @param Width Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）
   * @param Height Height：字符串型，可选，保留字符切割高度范围（例："30-100"）
   * @param Value value：整数型，可选，点数阈值（默认6，范围：1~8）
   * @param Row Row：整数型，可选，行间距（默认3）
   * @param Column Column：整数型，可选，列间距（默认2）
   * @returns CharNum：整数型，字符切割数量(最大下标值)
   */
  Incise_ColorLayered(
    interval: number,
    num: number,
    Width?: string,
    Height?: string,
    Value?: number,
    Row?: number,
    Column?: number
  ): number;
  /**
   * 自适应矩形字符切割（体验版）
   * @param Width Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）
   * @param Height Height：字符串型，可选，保留字符切割高度范围（例："30-100"）
   * @returns CharNum：整数型，字符切割数量
   */
  Incise_Adaptive(Width: string, Height: string): number;
  /**
	 * 对切割的字符像素数据进行显示查看
	 * @param index index：整数型，切割字符索引号
	 * @returns { string } [点击图像位置的坐标，格式：x,y]
													x：返回图像上点击位置的X坐标
													y：返回图像上点击位置的Y坐标
	 */
  Incise_Preview(index: number): string;

  // 切割字符修正处理
  /**
   * Incise_AutoCharData 自动调整切割字符数据
   * @param Width 字符串型，可选，保留字符切割宽度范围（例："50-150"）。
   * @param Height：字符串型，可选，保留字符切割高度范围（例："30-100"）。
   * @returns CharNum：整数型，字符切割数量(最大下标值)
   */
  Incise_AutoCharData(Width?: string, Height?: string): number;
  /**
   * 对切割的字符像素数据进行旋转纠正处理(使用白点占比最大的方法)
   * @param angle：整数型，旋转的正负度数值（范围：1~90）
   * @param value：整数型，旋转的度数步进（范围：1~9）
   */
  Incise_CharRotateCorrect(angle: number, value: number): void;
  /**
   * 对切割的字符像素数据进行倾斜矫正处理
   */
  Incise_CharSlantCorrect(): void;
  /**
   * 对切割的字符像素数据进行统一大小
   * @param iWidth：整数型，统一大小的宽度值
   * @param iHeight：整数型，统一大小的高度值
   */
  Incise_CharSizeOne(iWidth: number, iHeight: number): void;

  // 配置字符数据
  /**
   * 获取切割字符的数据结构信息
   * @param Mode：整数型，默认0:全部数据，1:左,上，2:左,上,宽,高，3:宽,高,点阵
   * @returns  字符串型，字符切割数据信息，格式：左,上,宽,高,点阵|左,上,宽,高,点阵|…）
   */
  Incise_GetCharData(Mode: number): string;
  /**
   * 修改图像中切割的字符数据
   * @param Index：整数型，切割字符数据对应的索引号
   * @param Left：整数型，可选，设置左边坐标（默认0）
   * @param Top：整数型，可选，设置顶上坐标（默认0）
   */
  Incise_ModifyCharData(Index: number, Left?: number, Top?: number): void;
  /**
   * 清除图像中切割的字符所有数据
   */
  Incise_EraseData(): void;
  /**
   * 追加图像数据为切割字符数据
   * @param Left：整数型，可选，设置左边坐标（默认0）
   * @param Top：整数型，可选，设置顶上坐标（默认0）
   * @returns CharNum：整数型，字符切割数量(最大下标值)
   */
  Incise_AddCharData(Left?: number, Top?: number): number;
  /**
   * 对切割的两个字符像素数据进行合并处理
   * @param index1：整数型，切割字符索引号1
   * @param index2：整数型，切割字符索引号2（合并后删除此字符图像）
   * @returns CharNum：整数型，字符切割数量(最大下标值)
   */
  Incise_JoinCharData(index1: number, index2: number): number;
  /**
   * 对切割的字符像素数据进行自适应大小处理(内部最大缩放为2倍)
   * @param iWidth 自适应宽度值(内部最大缩放为2倍)
   * @param iHeight 自适应高度值(内部最大缩放为2倍)
   */
  Incise_CharSizeAdaptive(iWidth: number, iHeight: number): void;
  // 目标区域定位
  /**
   * 目标检测区域定位（用法：同范围投影字符切割）
   * @param Row：整数型，行间隙（横向，最小值）
   * @param Column：整数型，列间隙（纵向，最小值）
   * @param Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）。
   * @param Height：字符串型，可选，保留字符切割高度范围（例："30-100"）。
   * @param Flag：整数型，可选，排序规则（默认0书写顺序，1从左到右）
   */
  Locate_TargetArea(
    Row: number,
    Column: number,
    Width?: string,
    Height?: string,
    Flag?: number
  ): number;
  /**
   * 获取目标定位区域信息（需配合：目标检测定位）
   * @param Model：整数型，可选，模式（默认0全部数据，1:左,上，2:宽,高）
   * @returns Ret：字符串型，字符位置区域信息
   */
  Locate_GetAreaInfo(Model?: number): string;
}
