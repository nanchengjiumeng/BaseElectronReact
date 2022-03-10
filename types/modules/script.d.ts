/** 引擎运行（脚本） */
export interface Script {
  /**
   * 运行Cmd命令行功能
   * @param CmdLine：字符串型，命令行内容
   * @returns ret：字符串型，执行结果信息内容
   */
  Run(CmdLine: string): string;
  /**
   * 执行类型Cmd命令行的功能。带参数执行，并返回进程ID
   * @param CmdLine：字符串型，命令行内容
   * @returns ret：整数型，进程ID
   */
  ShellRun(CmdLine: string): number;
  /**
   * 结束进程ID
   * @param PID：整数型，进程ID
   * @returns 无
   */
  KillApp(PID: number): void;
  /**
   * 运行VBS脚本命令内容
   * @param sText：字符串型，脚本命令内容/或者vbs脚本文件
   * @param Items：变体型，可选，指定函数的参数值（可以设置16个哦，每个参数用逗号隔开）
   * @returns ret：字符串型，执行结果
   */
  RunVBScript(sText: string, Items?: string): string;
  /**
   * 计算一个算术表达式（仅四则运算）
   * @param formula：字符串型，算术表达式
   * @returns num：字符串型，计算结果数值
   */
  Calc(formula: string): string;
}
