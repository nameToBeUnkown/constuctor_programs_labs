import { Renderer } from "./Renderer";

export class VectorRenderer implements Renderer {
  renderCircle(radius: number): void {
    console.log(`Drawing Circle (radius: ${radius}) as vector graphics`);
  }

  renderSquare(side: number): void {
    console.log(`Drawing Square (side: ${side}) as vector graphics`);
  }

  renderTriangle(base: number, height: number): void {
    console.log(
      `Drawing Triangle (base: ${base}, height: ${height}) as vector graphics`
    );
  }
}
