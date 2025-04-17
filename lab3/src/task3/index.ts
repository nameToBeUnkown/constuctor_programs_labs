import { Renderer } from "./Renderer";
import { VectorRenderer } from "./VectorRenderer";
import { RasterRenderer } from "./RasterRenderer";
import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Square } from "./Square";
import { Triangle } from "./Triangle";

console.log("\n==========================================");
console.log("--- Task 3 ---");
console.log("==========================================\n");

const vectorRenderer: Renderer = new VectorRenderer();
const rasterRenderer: Renderer = new RasterRenderer();

const vectorCircle: Shape = new Circle(vectorRenderer, 5);
const vectorSquare: Shape = new Square(vectorRenderer, 10);
const vectorTriangle: Shape = new Triangle(vectorRenderer, 8, 4);

console.log("--- Drawing shapes using Vector Renderer ---");
vectorCircle.draw();
vectorSquare.draw();
vectorTriangle.draw();
console.log("---");

const rasterCircle: Shape = new Circle(rasterRenderer, 7);
const rasterSquare: Shape = new Square(rasterRenderer, 12);
const rasterTriangle: Shape = new Triangle(rasterRenderer, 10, 5);

console.log("--- Drawing shapes using Raster Renderer ---");
rasterCircle.draw();
rasterSquare.draw();
rasterTriangle.draw();
console.log("---");

console.log("\n--- End of Task 3 Demonstration ---");
