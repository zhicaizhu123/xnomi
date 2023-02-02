/**
 * @module 文件检验
 */

import { getFileSuffix } from '@xnomi/is'

function fileHandler(file: File | File[]) {
  return !(file instanceof File) ? Array.from(file) : [file]
}

/**
 * 校验文件数
 *
 * @param {(File | File[])} file 检验文件
 * @param {number} [maxCount] 最大文件数
 * @return {boolean}
 */
export function validateFileCount(file: File | File[], maxCount?: number) {
  const files = fileHandler(file)
  if (maxCount) {
    return files.length <= maxCount
  }
  return true
}

/**
 * 检验文件大小
 *
 * @param {(File | File[])} file 校验文件
 * @param {number} [maxSize] 最大size，如果不传或则传0表示不校验
 * @return {boolean}
 */
export function validateFileSize(file: File | File[], maxSize?: number) {
  const files = fileHandler(file)
  if (maxSize) {
    return files.every((file) => file.size <= maxSize)
  }
  return true
}

/**
 * 校验文件类型
 *
 * @param {(File | File[])} file 校验文件
 * @param {string} [type] 匹配的类型, 如果不传则表示不校验
 * @return {boolean}
 */
export function validateFileType(file: File | File[], type?: string) {
  const files = fileHandler(file)
  if (type && !type.endsWith('*')) {
    const types = type.split(',').map((item) => item.replace(/\s|\./, ''))
    return files.every((file) => {
      const suffix = getFileSuffix(file.name)
      return suffix && types.includes(suffix)
    })
  }
  return true
}
