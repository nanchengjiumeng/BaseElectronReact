/** 文本文件（内容） */
export default interface 文本文件 {
  /**
   * 对多张图片合成GIF文件
   * @param LoadName：字符串型，加载多张图片（jpg,bmp,png），但必须是同尺寸文件（格式：图片1|图片2|…）
   * @param SaveName：字符串型，保存文件路径<br>
   * @param Delay：整数型，可选，延迟时间（默认100毫秒）
   * @returns 无
   */
  FileSaveGIF(LoadName: string, SaveName: string, Delay?: number): void;
  /**
   * 下载指定的网络地址文件（包含图片和任何格式文件）
   * @param sUrl：字符串型，网络文件地址
   * @param SaveName：字符串型，保存文件路径（记得写对后缀名）
   * @returns 无
   */
  FileDownload(sUrl: string, SaveName: string): void;
  /**
   * 压缩一个文件（自创算法,效率还是不错的）
   * @param OriginalFile：字符串型，原始文件路径
   * @param ZipPath：字符串型，压缩后文件路径（后缀名任意！）
   * @returns ret：布尔型，是否成功（失败：False或0）
   */
  Files_Dried(OriginalFile: string, ZipPath: string): boolean;
  /**
   * 多个文件进行合并为一个文件
   * @param FilesPath：字符串型，多个文件路径（可以不同的文件路径，多文件用竖线|分隔）
   * @param SaveFile：字符串型，保存文件路径（后缀名任意！）
   * @returns ret：布尔型，是否成功（失败：False）
   */
  Files_Merge(FilesPath: string, SaveFile: string): boolean;
  /**
   * 读取文本文件内容
   * @param FilePath：字符串型，文件路径（后缀名任意！）
   * @returns ret：字符串型，文本内容
   */
  Files_Read(FilePath: string): string;
  /**
   * 保存文本文件内容
   * @param iText：字符串型，文本内容
   * @param SavePath：字符串型，保存文件路径（后缀名任意！）
   * @returns 无
   */
  Files_Save(iText: string, SavePath: string): void;
  /**
   * 遍历指定目录下所有文件夹和文件名（单层目录遍历）
   * @param sPath：字符串型，指定目录的路径
   * @param sType：字符串型，可选，筛选的文件类型（默认全部：""，格式：jpg|bmp|png）<br>
   * @param value：布尔型，可选，是否包含文件夹名（默认：False，含：True）
   * @returns Names：字符串型，文件夹名\|文件名|…
   */
  Files_Search(sPath: string, sType?: string, value?: boolean): string;
  /**
   * 对已合并的文件拆分为多个文件
   * @param FilePath：字符串型，已合并的文件路径
   * @param SaveFolder：字符串型，释放文件夹路径
   * @returns ret：布尔型，是否成功（失败：False）
   */
  Files_Split(FilePath: string, SaveFolder: string): boolean;
  /**
   * 解压一个文件（自创算法,效率还是不错的）
   * @param ZipFile：字符串型，压缩文件路径
   * @param OutputFile：字符串型，释放后文件路径（后缀名任意！）
   * @returns ret：布尔型，是否成功（失败：False或0）
   */
  Files_UnDried(ZipFile: string, OutputFile: string): boolean;
  /**
   * 在文件末尾写入一行文本内容
   * @param iText：字符串型，文本内容
   * @param SavePath：字符串型，保存文件路径（后缀名任意！）
   * @returns 无
   */
  Files_WriteLine(iText: string, SavePath: string): void;
}
