import { isDate, isPlainObject } from './util'

/**
 *
 * @param url
 * @param params
 * @features
 *  1.值为 null 或者 undefined 忽略
 *  2.参数值为数组
 *  3.参数值为对象
 *  4.参数值为 Date 类型
 *  5.特殊字符支持，空格使用`+`传递，不希望被 encode
 *  6.丢弃 url 中的哈希标记
 *  7.保留 url 中已存在的参数
 */
export function bulidURL(url: string, params?: any) {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    let val = params[key]

    // 值为 null 或者 undefined 忽略
    if (val === null || typeof val === 'undefined') {
      return
    }

    // ...
  })

  return url
}
