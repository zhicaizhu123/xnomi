/**
 * 数字转换为金额
 *
 * @category transfer
 * @param {number} num 转换的数字
 * @param {number} [size=2] 保留的小数点
 * @return {string} 返回已格式化字符串
 */
export function toCurrency(num: number, size = 2) {
  num = Number(num)
  const isNegative = num < 0
  if (isNegative) {
    num = -num
  }
  let [int, decimal] = num.toFixed(size < 0 ? 0 : size).split('.')
  int = int.replace(/(?!^)(?=(\d{3})+$)/g, ',')
  decimal = decimal ? decimal.slice(0, size) : ''
  let end = ''
  if (+decimal !== 0) {
    end = `${size > 0 ? '.' : ''}${decimal.padEnd(size, '0')}`
  }
  return `${isNegative ? '-' : ''}${int}${end}`
}
