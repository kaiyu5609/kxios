import { KxiosRequestConfig, KxiosPromise, KxiosResponse } from './types'
import { parseHeaders } from './helpers/headers'

export default function xhr(config: KxiosRequestConfig): KxiosPromise {
  return new Promise(resolve => {
    const { url, method = 'get', data = null, headers, responseType } = config

    const request = new XMLHttpRequest()

    /**
     * 添加 `responseType`
     */

    request.open(method.toUpperCase(), url, true)

    /**
     * 监听 `onreadystatechange` 事件
     */
    request.onreadystatechange = function handleLoad() {
      // TODO

      /**
       * 解析 `responseHeaders`
       */
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())

      /**
       * 响应数据
       */
      const responseData = request.response

      const response: KxiosResponse = {
        status: request.status,
        statusText: request.statusText,
        data: responseData,
        headers: responseHeaders,
        config,
        request
      }

      resolve(response)
    }

    /**
     * 处理header TODO
     * `request.setRequestHeader`
     */
    Object.keys(headers).forEach(name => {
      // TODO
    })

    request.send(data)
  })
}
