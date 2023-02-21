/**
 * base64转blob
 *
 * @category transfer
 * @param {string} base64Buf base64字符串
 * @return {Blob}
 */
export function dataURLtoBlob(base64Buf: string) {
  const arr = base64Buf.split(',')
  const typeItem = arr[0]
  const mime = typeItem.match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * 图片链接转base64
 *
 * @category transfer
 * @param {string} url 链接
 * @param {string} [mineType] 模式
 * @return {Promise<string>}
 */
export function urlToBase64(url: string, mineType?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('CANVAS') as Nullable<HTMLCanvasElement>
    const ctx = canvas!.getContext('2d')

    const img = new Image()
    img.crossOrigin = ''
    img.onload = function () {
      if (!canvas || !ctx) {
        return reject()
      }
      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      const dataURL = canvas.toDataURL(mineType || 'image/png')
      canvas = null
      resolve(dataURL)
    }
    img.src = url
  })
}

/**
 * File转DataURL
 *
 * @category transfer
 * @param {(File | Blob)} file 需要转换的File文件
 * @return {Promise<string>}
 */
export function fileToDataURI(file: File | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
      }
    })
    reader.addEventListener('error', reject)
    reader.readAsDataURL(file)
  })
}

/**
 * 图片大小格式化
 *
 * @category transfer
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
