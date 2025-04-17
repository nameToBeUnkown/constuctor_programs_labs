import { Shape } from "./Shape";
import { Renderer } from "./Renderer";

export class Square extends Shape {
  private side: number;

  constructor(renderer: Renderer, side: number) {
    super(renderer);
    this.side = side;
  }

  draw(): void {
    this.renderer.renderSquare(this.side);
  }
}
