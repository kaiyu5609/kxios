import { KxiosRequestConfig, KxiosPromise, KxiosResponse } from './types'
import xhr from './xhr'
import { bulidURL } from './helpers/url'
import { transformRequest, transfromResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

/**
 * `kxios`
 * @param config
 */
function kxios(config: KxiosRequestConfig): KxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

/**
 * 处理请求参数 `config`
 * @param config
 */
function processConfig(config: KxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

/**
 * 处理请求 `url` 参数
 * 依赖`params`
 * @param config
 */
function transformUrl(config: KxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}

/**
 * 处理请求 `body` 逻辑
 * @param config
 */
function transformRequestData(config: KxiosRequestConfig): any {
  return transformRequest(config.data)
}

/**
 * 处理请求 `headers` 参数
 * 依赖`data`
 * @param config
 */
function transformHeaders(config: KxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

/**
 * 处理响应 `data`
 * @param res
 */
function transformResponseData(res: KxiosResponse): KxiosResponse {
  res.data = transfromResponse(res.data)
  return res
}

export default kxios
