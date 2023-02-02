/**
 * 获取文件后缀
 *
 * @param {string} url 文件链接
 * @return {string}
 */
export function getFileSuffix(url: string) {
  return url.split('.').pop()?.toLowerCase()
}

/**
 * 是否为TXT文件
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isTxt(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /txt$/.test(suffix)
}

/**
 * 是否为office文件
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isOffice(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(docx?|xlsx?|pptx?)$/.test(suffix)
}

/**
 * 是否为Excel/csv文件
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isExcel(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(xlsx?|csv)$/.test(suffix)
}

/**
 * 是否为Word文件
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isWord(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(docx?)$/.test(suffix)
}

/**
 * 是否为PPT文件
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isPPT(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(pptx?)$/.test(suffix)
}

/**
 * 是否为pdf文件
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isPdf(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(pdf)$/.test(suffix)
}

/**
 * 是否为图片
 *
 * @param {string} url 文件链接
 * @return {*}
 */
export function isImage(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(jpe?g|png|bmp|gif)$/.test(suffix)
}

/**
 * 是否为视频
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isVideo(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(mp4|mov|flv|wmv|avi)$/.test(suffix)
}

/**
 * 是否为Mp4
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isMp4(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(mp4)$/.test(suffix)
}

/**
 * 是否为音频
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isAudio(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(mp3|wav|acc|ogg)$/.test(suffix)
}

/**
 * 是否为mp3
 *
 * @param {string} url 文件链接
 * @return {boolean}
 */
export function isMp3(url: string) {
  const suffix = getFileSuffix(url) || ''
  return /(mp3)$/.test(suffix)
}
