import { KxiosRequestConfig } from './types'

export default function xhr(config: KxiosRequestConfig): void {
  const { url, method = 'get', data = null, headers } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  /**
   * 处理header TODO
   * `request.setRequestHeader`
   */
  Object.keys(headers).forEach(name => {})

  request.send(data)
}
