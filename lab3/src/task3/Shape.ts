import { Renderer } from "./Renderer";

export abstract class Shape {
  protected renderer: Renderer;

  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }

  abstract draw(): void;
}
