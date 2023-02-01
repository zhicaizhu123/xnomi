/**
 * 偏移项数据接口
 */
export interface ViewportOffsetResult {
  /**
   * 左偏差值
   */
  left: number
  /**
   * 顶部偏差值
   */
  top: number
  /**
   * 右偏差值
   */
  right: number
  /**
   * 底部偏差值
   */
  bottom: number
  rightIncludeBody: number
  bottomIncludeBody: number
}
