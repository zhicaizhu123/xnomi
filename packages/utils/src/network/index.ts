/**
 * 获取网络信息
 */
export function getNetwork() {
  const navigator = window.navigator as unknown as any
  const isSupported = Boolean(navigator && 'connection' in navigator)
  const connection = isSupported && navigator.connection
  let isOnline: boolean = navigator.onLine
  let offlineAt = isOnline ? void 0 : Date.now()
  let saveData = false
  let downlink: number | undefined = void 0
  let downlinkMax: number | undefined = void 0
  let rtt: number | undefined = void 0
  let effectiveType: string | undefined = void 0
  let type = 'unknown'
  if (connection) {
    downlink = connection.downlink
    downlinkMax = connection.downlinkMax
    effectiveType = connection.effectiveType
    rtt = connection.rtt
    saveData = connection.saveData
    type = connection.type || 'unknown'
  }
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type,
  }
}

export function getNetworkTime(url = location.href, method: 'GET' | 'HEAD' = 'GET') {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          resolve(new Date(xhr.getResponseHeader('Date') as string).getTime())
        } else {
          resolve(Date.now())
        }
      }
    }
    xhr.send()
  })
}
