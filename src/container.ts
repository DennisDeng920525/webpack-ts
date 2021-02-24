/**
 * @desc 容器属性
 * @author 邓欢
 */

import ContainerOptions from './models/container-options';

const CONTAINER_STYLE: any = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  left: '0',
  zIndex: '-1',
  backgroundColor: 'transparent',
  pointerEvents: 'none',
};

export class Container {
  /** 容器属性 */
  private props: ContainerOptions;
  /** 容器canvas对象 */
  public canvas: HTMLCanvasElement;
  /** 容器高度 */
  public height: number;
  /** 容器宽度 */
  public width: number;
  /** canvas渲染内容对象 */
  public ctx: CanvasRenderingContext2D;

  constructor(containerProps: ContainerOptions) {
    this.props = containerProps;
    this._init();
  }

  private _init() {
    this.props.dom.style['position'] = 'relative';
    this.canvas = document.createElement('canvas');
    for (const key in CONTAINER_STYLE) {
      if (Object.prototype.hasOwnProperty.call(CONTAINER_STYLE, key)) {
        this.canvas.style[key as any] = CONTAINER_STYLE[key];
      }
    }
    this.ctx = this.canvas.getContext('2d');

    // 获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
    const e = this.props.dom.getBoundingClientRect();

    this.width = e.width * window.devicePixelRatio;
    this.height = e.height * window.devicePixelRatio;
    this.canvas.height = this.height;
    this.canvas.width = this.width;

    this.props.dom.appendChild(this.canvas);
    // TODO 事件
    // this.canvas.addEventListener('touchstart', this.touchstartEvent);
    // this.canvas.addEventListener('touchmove', this.touchmoveEvent);
    // this.canvas.addEventListener('touchend', this.touchendEvent);
  }
}
