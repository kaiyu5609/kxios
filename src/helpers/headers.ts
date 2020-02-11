export function processHeaders(headers: any, data: any): any {
  /**
   * 因为请求 `headers` 属性是大小写不敏感的
   * 所以需对 `headers` 做一层加工
   */

  /**
   * 如果`data`是一个普通对象
   *    如果`headers`有配置，且其中没有配置`Content-Type`属性，则
   *    给其添加上对应的值`application/json;charset=utf-8`
   */

  return headers
}
