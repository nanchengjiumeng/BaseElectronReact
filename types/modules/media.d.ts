/** 多媒体（语音 ） */
export default interface 多媒体 {
  /**
   * 获取播放时间长度(单位：毫秒)
   * @param 无
   * @returns Length：整数型，音乐播放时间长度（单位：毫秒）
   */
  Media_GetMusicLength(): number;
  /**
   * 获取当前播放进度
   * @param 无
   * @returns Pos:整数型，播放进度（单位：毫秒）
   */
  Media_GetMusicPos(): string;
  /**
   * 获取声音大小
   * @param 无
   * @returns Volume:整数型，音量（最大值：100）
   */
  Media_GetVolume(): string;
  /**
   * 当前音乐是否在播放
   * @param 无
   * @returns Playing:布尔型，状态（true或者非0：在播放）
   */
  Media_IsPlaying(): string;
  /**
   * 暂停播放音乐
   * @param 无
   * @returns 无
   */
  Media_PauseMusic(): void;
  /**
   * 播放音乐（支持在线播放）
   * @param FileName：字符串型，音乐文件路径（支持在线：http://*）
   * @returns 无
   */
  Media_PlayMusic(FileName: string): void;
  /**
   * 继续播放音乐
   * @param 无
   * @returns 无
   */
  Media_ResumeMusic(): void;
  /**
   * 设置当前播放进度
   * @param Pos:整数型，播放进度（单位：毫秒）
   * @returns 无
   */
  Media_SetMusicPos(Pos: number): void;
  /**
   * 设置声音大小
   * @param Volume:整数型，音量（最大值：100）
   * @returns 无
   */
  Media_SetVolume(Volume: number): void;
  /**
   * 停止音乐播放
   * @param 无
   * @returns 无
   */
  Media_StopMusic(): void;
  /**
   * 文字转语音（百度语音识别接口）
   * @param Text：字符串型，需要转换的文字内容
   * @param Sound：整数型，声音类型（0小姐姐,1小哥哥,2大姐姐,3大哥哥）<br>
   * @param SavePath：字符串型，保存声音文件路径（后缀名.mp3）
   * @returns 无
   */
  Media_TextToSpeech(Text: string, Sound: number, SavePath: string): void;
}
