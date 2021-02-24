/**
 * @desc 入口文件
 * @author 邓欢
 */

import { Container } from './container';
import Area from './models/area-options';
import { isElement } from './utils/dom-helper';

interface IChartOptions {
  /** 像素比 */
  devicePixelRatio?: number;

  /** 主区域高度 */
  mainAreaHeight?: number;
  /** 坐标轴区域高度 */
  axisAreaHeigth?: number;
}

export default class JXKLine {
  private dom: HTMLElement;
  private dpr: number;
  private opts: IChartOptions;
  private container: Container;
  private mainArea: Area;
  private axisArea: Area;
  private secondArea: Area;

  constructor(dom: HTMLElement, opts: IChartOptions) {
    this.dom = dom;
    this.opts = opts;
    this.dpr = opts.devicePixelRatio || window.devicePixelRatio;
    this._init();
  }

  private _init() {
    this._initContainer();
    this._initArea();
  }

  private _initContainer() {
    if (!isElement(this.dom)) {
      throw new Error('初始化失败，请指定有效DOM！');
    }

    this.container = new Container({ dom: this.dom });
  }

  private _initArea() {
    /**
     * 坐标轴默认高度为12
     * 如果没传主区域高度，剩余区域默认按照 主区域高度:次区域高度 = 2:1的比例分配
     */
    const axisAreaHeight = this.opts.axisAreaHeigth || 12;
    const mainAreaHeight =
      this.opts.mainAreaHeight ||
      ((this.mainArea.height - axisAreaHeight) * 2) / 3;
    const secondAreaHeight =
      this.container.height - axisAreaHeight - mainAreaHeight;
    const width = this.container.width;

    this.mainArea = new Area(width, mainAreaHeight, 0, 0);
    this.axisArea = new Area(width, axisAreaHeight, 0, mainAreaHeight);
    this.secondArea = new Area(
      width,
      secondAreaHeight,
      0,
      axisAreaHeight + mainAreaHeight,
    );
  }
}
