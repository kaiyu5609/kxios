import { KxiosRequestConfig, KxiosResponse } from '../types'

export class KxiosError extends Error {
  config: KxiosRequestConfig
  isKxiosError: boolean
  code?: string | null
  request?: any
  response?: KxiosResponse

  constructor(
    message: string,
    config: KxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: KxiosResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isKxiosError = true

    /**
     * hack
     * 解决TypeScript继承一些内置对象的坑
     */
    Object.setPrototypeOf(this, KxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: KxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: KxiosResponse
): KxiosError {
  const error = new KxiosError(message, config, code, request, response)

  return error
}
