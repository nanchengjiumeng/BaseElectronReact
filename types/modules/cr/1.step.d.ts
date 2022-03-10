/** 文字识别（主打）步骤一 文字识别 */
export default interface 文字识别 {
  /**
   * 获取屏幕指定范围的图像像素数据
   * @param left 整数型，屏幕左上角X坐标
   * @param top 整数型，屏幕左上角Y坐标
   * @param right 整数型，屏幕右下角X坐标
   * @param bottom 整数型，屏幕右下角Y坐标
   * @param Model 整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
   */
  Pixel_FromScreen(
    left: number,
    top: number,
    right: number,
    bottom: number,
    Model?: number
  ): void;
  /**
   * 获取指定路径图片文件的图像像素数据
   * @param ImagePath 字符串型，图片文件的路径(支持：bmp、png、jpg、gif|帧、格式)，GIF帧参数："路径|帧"
   * @param Model 整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
   */
  Pixel_FromPicture(ImagePath: string, Model?: number): void;
  /**
   * 获取内存地址中的24位bmp图像像素数据
   * @param Data 整数型，内存数据地址指针
   * @param Size 整数型，内存数据长度
   * @param Model 整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
   */
  Pixel_FromMemory(Data: number, Size: number, Model?: number): void;
  /**
	 * 获取当前鼠标图案的像素数据
	 * @param Width 整数型，可选，宽度（默认32）
	 * @param Height 整数型，可选，高度（默认32）
	 * @param model 整数型，可选，模式(默认0鼠标图案，1为鼠标位置的屏幕图像)
	 * @returns [字符串型，hot热点（格式：x坐标,y坐标）]
		 x：热点x坐标
		 y：热点y坐标
	*/
  Pixel_FromMouse(Width?: number, Height?: number, model?: number): string;
  /**
	 * 对获取的图像像素数据进行显示查看
	 * @param Mode 整数型，可选，模式：图像或直方图（默认0图像,1垂直直方图,2水平直方图）
	 * @param subLine 布尔型，可选，默认False（True显示十字辅助线）
	 * @returns [点击图像位置的坐标，格式：x,y]
		 x：返回图像上点击位置的X坐标<br>
		 y：返回图像上点击位置的Y坐标
	 */
  Pixel_Preview(Mode?: number, subline?: boolean): string;
  // 配置图像数据
  /**
   * 将内部的图像数据保存为.bmp图片文件
   * @param ImagePath
   */
  SaveImageData(ImagePath: string): void;
  /**
   * 载入图像像素数据，用于内部滤镜处理
   * @param ImageData 字符串型，图像像素数据，格式：宽|高|图像数据(b,g,r,a,b,g,r,a,…)
   * @returns
   */
  LoadImageData(ImageData: string): void;
  /**
   * 获取图像数据的内存地址和数据长度
   * @param data 整数型，返回图像数据内存地址
   * @param size 整数型，返回图像数据字节长度
   * @returns
   */
  GetMemoryDataBmp(data: number, size: number): void;
  /**
	 * 得到内部的图像像素数据，用于二次开发
	 * @param value 整数型，可选，模式（默认0:宽|高|图像数据，1:宽|高，2:全部设置到剪切板）
	 * @returns [图像像素数据，字符串型格式：宽|高|图像数据(b,g,r,a,b,g,r,a,…)]
		 width：字符串型，图像宽度<br>
		 height：字符串型，图像高度<br>
		 ImageData：字符串型，图像数据
 */
  GetImageData(value?: number): string;
  /**
	 * 获取指定图片的宽度和高度
	 * @param FilePath 字符串型，图片文件的路径(支持：bmp、png、jpg、gif格式)
	 * @returns [图片大小，格式：宽,高]
		 w：图片宽度值<br>
		 h：图片高度值
	 */
  GetImageSize(FilePath: string): string;
  /**
   * 获取Gif图片帧数
   * @param FilePath 字符串型，GIF图片文件的路径(支持：gif格式)
   * @returns 整数型，GIF图片帧数
   */
  GetGifFrames(FilePath: string): number;
  /**
   * 对获取的图像像素数据进行颜色图层拆分
   * @param Interval 整数型，两颜色值之间的空间距离（以HSV的颜色空间计算的）
   * @param Value 字符串型，筛选掉干扰的颜色点数范围（例：大于保留："15"个像素，区间保留："520-9751"个像素）
   * @returns 整数型，颜色图层数量
   */
  Pixel_ColorImageData(Interval: number, Value: string): number;
  /**
   * 对获取的图像像素数据进行RGB通道图层拆分（顺序：蓝绿红）
   * @param Model 布尔型，可选，默认False全图，True单色图
   */
  Pixel_ChannelImageData(Model?: boolean): void;
  /**
   * 图像像素数据拆分为多个（上限10个）
   * @param left 整数型，屏幕左上角X坐标
   * @param top 整数型，屏幕左上角Y坐标
   * @param right 整数型，屏幕右下角X坐标
   * @param bottom 整数型，屏幕右下角Y坐标
   * @param Serial 整数型，分配数据编号（默认1，上限10个）
   */
  Pixel_CutImageData(
    left: number,
    top: number,
    right: number,
    bottom: number,
    Serial?: number
  ): void;
  /**
   * 对拆分的图像像素数据进行设置
   * @param Serial 整数型，指定数据编号（默认1，上限10个）
   */
  Pixel_SetImageData(Serial?: number): void;
  /**
   * 配置图像像素数据应用于图色场景
   * @param Mode 整数型，场景模式(默认1找图场景,2绘图图像>
   */
  Pixel_SetSceneImageData(Mode?: number): void;
  /**
   * 对切割的字符图像像素数据进行设置
   * @param index 整数型，切割图像索引号
   */
  Pixel_SetImageDataCut(index: number): void;
  /**
   * 对字库的字符图像像素数据进行设置
   * @param Index 整数型，字库图像索引号
   * @returns 字符串型，字库对应的文字
   */
  Pixel_SetImageDataLib(Index: number): string;
  /**
   * 对拆分的颜色图层设置为图像像素数据
   * @param Index 整数型，颜色图层数据索引号（顺序：蓝绿红）
   */
  Pixel_SetLayerImageData(Index: number): void;
  // 剪切板图像
  /**
   * 获取剪切板中的图像像素数据
   */
  Pixel_GetClpImageData(): void;
  /**
   * 将内部的图像数据设置到剪切板中
   */
  Pixel_SetClpImageData(): void;
  /**
   * 设置屏幕图像数据保存到剪切板中
   * @param left 整数型，屏幕左上角X坐标
   * @param top 整数型，屏幕左上角Y坐标
   * @param right 整数型，屏幕右下角X坐标
   * @param bottom 整数型，屏幕右下角Y坐标
   */
  Pixel_SetClpScreenData(
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void;
  /**
   * 设置图片图像数据保存到剪切板中
   * @param ImagePath 字符串型，图片文件的路径
   */
  Pixel_SetClpPictureData(ImagePath: string): void;
  /**
   * 剪切板中的图像数据保存为图片文件
   * @param ImagePath 字符串型，保存图片文件的路径
   */
  Pixel_SaveClpImageData(ImagePath: string): void;
}
