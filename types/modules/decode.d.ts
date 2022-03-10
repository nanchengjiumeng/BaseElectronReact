/** 加密解密（编码） */
export default interface 加密解密 {
  /**
   * 二进制转十六进制字符串
   * @param BinStr：字符串型，二进制字符串内容
   * @returns HexStr：字符串型，十六进制字符串内容
   */
  BINtoHEX(BinStr: string): string;
  /**
   * 十六进制转二进制字符串
   * @param HexStr：字符串型，十六进制字符串内容
   * @returns BinStr：字符串型，二进制字符串内容
   */
  HEXtoBIN(HexStr: string): string;
  /**
   * 十进制转二进制字符串
   * @param DecNum：整数型，十进制数字
   * @returns BinStr：字符串型，二进制字符串内容
   */
  DECtoBIN(DecNum: number): string;
  /**
   * 对图片进行Base64编码（支持bmp/png/jpg/gif等）
   * @param FilePath：字符串型，图片文件路径
   * @param IsHead：布尔型，默认False，True为含包头（格式：“data:image/<后缀名>;base64,”）
   * @returns cipher：字符串型，编码的文本内容
   */
  Image_Base64Encode(FilePath: string, IsHead: boolean): string;
  /**
   * 对各种的图片格式进行转换
   * @param ImagePath：字符串型，需转换的图片路径（支持任意格式图片）
   * @param ImageSavePath：字符串型，保存指定格式的图片路径（支持的格式：bmp、png、jpg、gif）<br>
   * @param Value：整数型，可选，仅jpg格式的压缩率（默认80）
   * @returns 无
   */
  ImageFormatConverter(
    ImagePath: string,
    ImageSavePath: string,
    Value?: number
  ): void;
  /**
   * 字符串MD5加密
   * @param Text：字符串型，字符串内容
   * @param Code：整数型，可选，编码，默认3（格式：0:ANSI，1:ANSI-UTF8，2:GB2312，3:GB2312-UTF8）
   * @returns cipher：字符串型，加密的文字内容
   */
  Pass_MD5String(Text: string, Code?: number): string;
  /**
   * 字符串加密
   * @param text：字符串型，文字内容
   * @param password：字符串型，10位密码（每位范围：1~255）
   * @returns cipher：字符串型，加密的文字内容
   */
  Pass_Encode(text: string, password: string): string;
  /**
		* 字符串解密
				  
		* @param cipher：字符串型，加密的文字内容
		* @param password：字符串型，10位密码（每位范围：1~255）
		* @returns text：字符串型，文字内容
		*/
  Pass_Uncode(cipher: string, password: string): string;
  /**
   * 字符串URL编码
   * @param text 字符串型，文字内容
   * @returns cipher：字符串型，加密的文字内容
   */
  Url_Encode(text: string): string;
  /**
   * 字符串URL解码
   * @param cipher 字符串型，加密的文字内容
   * @returns text：字符串型，文字内容
   */
  Url_Decode(cipher: string): string;
}
