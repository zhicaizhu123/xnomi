/**
 * @module file
 */

export * from './download'

/**
 * TODO: 附件图标
 */
export const fileIcon = {
  word: {
    icon: '&#xe7b7;',
    bg: '#4DA4FA',
  },
  excel: {
    icon: '&#xe7b6;',
    bg: '#60C44B',
  },
  pdf: {
    icon: '&#xe7b5;',
    bg: '#FF5663',
  },
  ppt: {
    icon: '&#xe7b4;',
    bg: '#FF568F',
  },
  zip: {
    icon: '&#xe7b3;',
    bg: '#A272FF',
  },
  rar: {
    icon: '&#xe7b2;',
    bg: '#C572FF',
  },
  image: {
    icon: '&#xe7b8;',
    bg: '#FF9543',
  },
  video: {
    icon: '&#xe7c0;',
    bg: '#5773FF',
  },
  audio: {
    icon: '&#xe7c1;',
    bg: '#FB685B',
  },
  default: {
    icon: '&#xe7b1;',
    bg: '#C5C8CC',
  },
}

/**
 * 图片大小格式化
 *
 * @param {number} size 图片大小，byte单位
 * @return {string}
 */
export function toFileSize(size: number): string {
  const kb = 1024
  const mb = kb * 1024
  const gb = mb * 1024
  if (size > gb) {
    return `${Math.floor(size / gb)}Gb`
  } else if (size > mb) {
    return `${Math.floor(size / mb)}Mb`
  } else if (size > kb) {
    return `${Math.floor(size / kb)}Kb`
  } else if (size > 0) {
    return `${(size / kb).toFixed(1)}Kb`
  }
  return ''
}

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

/**
 * 获取文件图标
 *
 * @param {string} url 文件链接
 * @return {string}
 */
export function getFileIcon(url: string) {
  const suffix = getFileSuffix(url)
  switch (suffix) {
    case 'doc':
    case 'docx':
      return fileIcon.word
    case 'ppt':
    case 'pptx':
      return fileIcon.ppt
    case 'xls':
    case 'xlsx':
      return fileIcon.excel
    case 'pdf':
      return fileIcon.pdf
    case 'zip':
      return fileIcon.zip
    case 'rar':
      return fileIcon.rar
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'bmp':
    case 'gif':
      return fileIcon.image
    case 'mp4':
    case 'mov':
    case 'wmv':
    case 'flv':
    case 'avi':
      return fileIcon.video
    case 'mp3':
    case 'wav':
    case 'acc':
    case 'ogg':
      return fileIcon.audio
    default:
      return fileIcon.default
  }
}
