import { KxiosRequestConfig, KxiosPromise, KxiosResponse } from './types'
import { parseHeaders } from './helpers/headers'

export default function xhr(config: KxiosRequestConfig): KxiosPromise {
  return new Promise((resolve, reject) => {
    const { url, method = 'get', data = null, headers, responseType, timeout } = config

    const request = new XMLHttpRequest()

    /**
     * 添加 `responseType`
     */

    /**
     * 添加 `timeout`
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
     * 错误处理
     */
    request.onerror = function handleError() {
      reject(new Error('Networ Error'))
    }

    /**
     * 处理超时
     */
    request.ontimeout = function handleTimeout() {
      reject(new Error(`Timeout of ${timeout} ms exceeded`))
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
