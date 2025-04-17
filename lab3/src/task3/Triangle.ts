import { Shape } from "./Shape";
import { Renderer } from "./Renderer";

export class Triangle extends Shape {
  private base: number;
  private height: number;

  constructor(renderer: Renderer, base: number, height: number) {
    super(renderer);
    this.base = base;
    this.height = height;
  }

  draw(): void {
    this.renderer.renderTriangle(this.base, this.height);
  }
}
