/**
 * @desc dom元素相关辅助方法
 * @author 邓欢
 */

/**
 * 检查对象是否为元素
 * @param {any} o 待检查对象
 * @return {boolean} 返回是否为元素
 */
export function isElement(o: any): boolean {
  return typeof HTMLElement === 'object'
    ? o instanceof HTMLElement
    : o &&
        typeof o === 'object' &&
        o !== null &&
        o.nodeType === 1 &&
        typeof o.nodeName === 'string';
}
