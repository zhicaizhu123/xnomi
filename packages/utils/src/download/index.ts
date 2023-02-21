import { dataURLtoBlob, parseUrlParams } from '../transfer'

/**
 * 通过链接下载文件
 *
 * @category Download
 * @param {string} url 文件链接
 * @param {string} name 文件名称
 */
export function downloadByUrl(url: string, name: string) {
  const xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.responseType = 'blob'
  xhr.send()
  xhr.onload = function () {
    if (this.status === 200 || this.status === 304) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(this.response)
      fileReader.onload = function () {
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = this.result as string
        a.download = name
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
    }
  }
}

/**
 * 通过blob下载文件
 *
 * @category Download
 * @param {(string | Blob)} data 数据源
 * @param {string} filename 文件名
 * @return {Promise<void>}
 */
export async function downloadByBlob(data: Blob | MediaSource, filename: string) {
  const url = URL.createObjectURL(data)
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = url
  a.setAttribute('download', filename)
  if (typeof a.download === 'undefined') {
    a.setAttribute('target', '_blank')
  }
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => {
    // 延时释放
    URL.revokeObjectURL(url) // 用URL.revokeObjectURL()来释放这个object URL
  }, 100)
}

/**
 * 下载基于base64的图片
 *
 * @category Download
 * @param buf base64字符串
 * @param filename 文件名
 * @param mime 类型
 * @param bom
 */
export function downloadByBase64(buf: string, filename: string, mime?: string, bom?: BlobPart) {
  const base64Buf = dataURLtoBlob(buf)
  downloadByData(base64Buf, filename, mime, bom)
}

/**
 * 通过后端返回的数据进行下载
 *
 * @category Download
 * @param {*} res 需要下载的接口响应数据
 */
export function downloadFileByResponse(res: any) {
  const { headers, data } = res
  const { filename } = parseUrlParams(
    decodeURIComponent(headers['content-disposition'].split(';').pop().trim())
  )
  downloadByBlob(data, filename)
}

/**
 * 根据后台接口文件流进行下载
 *
 * @category Download
 * @param {*} data 文件流
 * @param {*} filename 文件名
 * @param {*} mime 类型
 * @param {*} bom
 */
export function downloadByData(data: BlobPart, filename: string, mime?: string, bom?: BlobPart) {
  const blobData = typeof bom !== 'undefined' ? [bom, data] : [data]
  const blob = new Blob(blobData, { type: mime || 'application/octet-stream' })
  downloadByBlob(blob, filename)
}
