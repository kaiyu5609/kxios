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
      if (request.readyState !== 4) {
        return
      }

      /**
       * 当出现网络错误或者超时错误的时候，`status`的值都为0
       */
      if (request.status === 0) {
        return
      }

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

      handleResponse(response)
    }

    /**
     * 处理非 `200` 状态码
     */
    function handleResponse(response: KxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(new Error(`Request failed with status code ${response.status}`))
      }
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
