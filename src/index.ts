/**
 * 检查对象是否为元素
 * @param o 待检查对象
 * @return {boolean}
 */
function isElement(o: any): boolean {
  return typeof HTMLElement === 'object'
    ? o instanceof HTMLElement
    : o &&
        typeof o === 'object' &&
        o !== null &&
        o.nodeType === 1 &&
        typeof o.nodeName === 'string';
}

function init(dom: HTMLElement, opts: any) {
  if (!isElement(dom)) {
    throw new Error('初始化失败，请指定有效DOM！');
  }
}
