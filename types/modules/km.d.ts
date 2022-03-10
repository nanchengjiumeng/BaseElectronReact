/** 键鼠模拟（备胎） */
export default interface KM {
  /**
   * 脚本暂停执行一段时间
   * @param mSec：整数型，毫秒数（1秒=1000毫秒）
   * @returns 无
   */
  KM_Delay(mSec: number): void;
  /**
		* 得到当前鼠标所在的位置坐标	
		* @param 无
		* @returns 
			[坐标，格式：x,y]
			x：返回屏幕X坐标<br>
			y：返回屏幕Y坐标
	*/
  KM_GetCursorPos(): string;
  /**
   * 键盘按下
   * @param Asck：整数型，键码
   * @returns 无
   */
  KM_KeyDown(Asck: number): void;
  /**
   * 键盘按键
   * @param Asck：整数型，键码
   * @returns 无
   */
  KM_KeyPress(Asck: number): void;
  /**
   * 键盘弹起
   * @param Asck：整数型，键码
   * @returns 无
   */
  KM_KeyUp(Asck: number): void;
  /**
   * 模拟点击鼠标左键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_LeftClick(x?: number, y?: number): void;
  /**
   * 模拟双击鼠标左键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_LeftDbClick(x?: number, y?: number): void;
  /**
   * 模拟按下鼠标左键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_LeftDown(x?: number, y?: number): void;
  /**
   * 模拟弹起鼠标左键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_LeftUp(x?: number, y?: number): void;
  /**
   * 模拟点击鼠标中键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_MiddleClick(x?: number, y?: number): void;
  /**
   * 模拟按下鼠标中键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_MiddleDown(x?: number, y?: number): void;
  /**
   * 模拟弹起鼠标中键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_MiddleUp(x?: number, y?: number): void;
  /**
   * 移动鼠标到指定位置
   * @param x：整数型，屏幕x坐标
   * @param y：整数型，屏幕y坐标
   * @returns 无
   */
  KM_MoveTo(x: number, y: number): void;
  /**
   * 模拟单击鼠标右键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_RightClick(x?: number, y?: number): void;
  /**
   * 模拟按下鼠标右键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_RightDown(x?: number, y?: number): void;
  /**
   * 模拟弹起鼠标右键
   * @param x：整数型，可选，屏幕x坐标（默认0）
   * @param y：整数型，可选，屏幕y坐标（默认0）
   * @returns 无
   */
  KM_RightUp(x?: number, y?: number): void;
  /**
   * 键盘输入文字
   * @param Text：字符串型，需要输入的文本内容
   * @returns 无
   */
  KM_SendString(Text: string): void;
}
