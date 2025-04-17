export interface Renderer {
  renderCircle(radius: number): void;
  renderSquare(side: number): void;
  renderTriangle(base: number, height: number): void;
}
