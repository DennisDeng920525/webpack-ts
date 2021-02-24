/**
 * @desc 区域属性
 * @author 邓欢
 */

export default class Area {
  /** 宽度 */
  public width: number;
  /** 高度 */
  public height: number;
  /** x轴起点 */
  public beginX: number;
  /** Y轴起点 */
  public beginY: number;

  /** x轴终点 */
  public get endX() {
    return this.width - this.beginX;
  }
  /** Y轴终点 */
  public get endY() {
    return this.height - this.beginY;
  }

  constructor(width: number, height: number, beginX: number, beginY: number) {
    this.width = width;
    this.height = height;
    this.beginX = beginX;
    this.beginY = beginY;
  }
}
