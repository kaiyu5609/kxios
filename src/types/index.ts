export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface KxiosRequestConfig {
  url: string
  method?: Method
  params?: any
  data?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface KxiosResponse {
  status: number
  statusText: string
  data: any
  headers: any
  config: KxiosRequestConfig
  request: any
}

/**
 * `kxios` 返回的是 `KxiosPromise` 类型
 * `resolve` 函数中的参数就是一个 `KxiosResponse` 类型
 */
export interface KxiosPromise extends Promise<KxiosResponse> {}
