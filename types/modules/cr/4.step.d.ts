/** 文字识别（主打）步骤四 加载字库 */
export default interface 加载字库 {
  /**
   * 加载识别字库文件数据
   * @param LibPath：字符串型，识别字库文件路径
   * @param iText：字符串型，可选，指定字库中的文字（类似白名单）
   * @returns 整数型，字库的数量
   */
  Lib_Load(LibPath: string, iText?: string): number;
  /**
   * 加载六十四进制识别字库字符串数据
   * @param LibStr：字符串型，识别字库的字符串内容（回车换行符用于分割数据）
   * @param iText：字符串型，可选，指定字库中的文字（类似白名单）
   * @returns num：整数型，字库的数量
   */
  ib_LoadBase64(LibStr: string, iText?: string): number;
  /**
   * 加载识别字库字符串数据
   * @param LibStr：字符串型，识别字库的字符串内容（回车换行符用于分割数据）
   * @param iText：字符串型，可选，指定字库中的文字（类似白名单）
   * @returns num：整数型，字库的数量
   */
  Lib_LoadEx(LibStr: string, iText?: string): number;
  /**
   * 创建系统的字体作为识别字库文件数据
   * @param Font：字符串型，系统中的字体名称|字体样式(默认0。数值：0正常，1粗体，2斜体。其他依次叠加数字)
   * @param Size：整数型，字体的字号大小
   * @param Text：字符串型，可选，设置字库内容，默认含有3500个汉字和英文数字符号。
   * @returns num：整数型，字库的数量
   */
  Lib_Create(Font: string, Size: number, Text?: string): number;
  /**
   * 添加新的识别字库数据到指定编号
   * @param Serial：整数型，可选，字库编号（默认1，上限20）
   * @returns
   */
  Lib_Add(Serial?: number): void;
  /**
   * 使用指定编号的识别字库数据
   * @param Serial：整数型，可选，字库编号（默认1，上限20）
   * @returns
   */
  Lib_Use(Serial?: number): void;
  /**
   * 对当前识别字库数据进行追加
   * @param Serial：整数型，可选，字库编号（默认1，上限20）
   * @returns Num：整数型，字库数量（下标）
   */
  Lib_AddData(Serial?: number): number;
  /**
   * 对当前识别字库数据进行追加
   * @param Serial：整数型，可选，字库编号（默认1，上限20）
   * @returns Num：整数型，字库数量（下标）
   */
  Lib_AddData(Serial?: number): number;
  /**
   * 分析切割字符的字体与字号
   * @param Text：字符串型，切割字符对应的文字
   * @param Mode：字符串型，样式，默认"0|0"（格式：0正常,1粗体,2斜体,3粗斜体|0中文字体，1英文字体）
   * @returns FontSize：字符串型，字体与字号（格式：字体,字号,相似度|字体,字号,相似度|…）
   */
  Lib_AnalyzeFontSize(Text: string, Mode: string): string;
  /**
	 * 对加载的识别字库点阵进行显示查看
	 * @param index：整数型，字库索引号
	 * @returns [点击图像位置的坐标，格式：x,y]
								x：返回图像上点击位置的X坐标
								y：返回图像上点击位置的Y坐标
	 */
  Lib_Preview(index: number): string;
  // 制作识别字库
  /**
   * 将已加载的识别字库重新生成一个新的字库文件
   * @param LibPath：字符串型，保存识别字库文件路径
   * @returns 无
   */
  Lib_Share(LibPath: string): void;
  /**
   * 将已加载的识别字库重新生成一个新的UTF8无BOM字库文件（移动版专用）
   * @param LibPath：字符串型，保存识别字库文件路径（后缀名：.lib8）
   * @returns 无
   */
  Lib_ShareUTF8(LibPath: string): void;
  /**
   * 生成二进制字符串点阵
   * @param 无
   * @returns bit：字符串型，二进制字符串点阵
   */
  Lib_Generate(): string;
  /**
   * 获取字库的单个数据信息
   * @param Serial：整数型，字库图像索引号（从0开始）
   * @param Mode：整数型，模式（默认0：全部，1：文字,宽,高，2：文字，3：宽,高，4：点阵）
   * @returns Info：字符串型，字库对应的信息内容
   */
  Lib_GetCharData(Serial: number, Mode: number): string;
  /**
   * 获取图像切割的字符点阵库内容
   * @param index：整数型，切割字符索引号
   * @returns lattice：字符串型，字符点阵（格式：字符宽,高|二进制字符串点阵）
   */
  Lib_OneCharData(index: number): string;
  /**
   * 切割字符存储为识别字库
   * @param text：字符串型，字符点阵对应的识别文字
   * @param lattice：字符串型，字符点阵（格式：字符宽,高|二进制字符串点阵）
   * @param LibPath：字符串型，识别字库文件路径
   * @returns 无
   */
  Lib_Save(text: string, lattice: string, LibPath: string): void;
  /**
   * 切割字符存储为识别字库（扩展）
   * @param text：字符串型，字符点阵对应的识别文字
   * @param Index：整数型，切割字符索引号（从0开始）
   * @param LibPath：字符串型，识别字库文件路径
   * @returns 无
   */
  Lib_SaveEx(text: string, Index: number, LibPath: string): void;
}
