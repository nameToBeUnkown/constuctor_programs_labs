import { Renderer } from './Renderer';

export class RasterRenderer implements Renderer {
    renderCircle(radius: number): void {
        console.log(`Drawing Circle (radius: ${radius}) as pixels (raster)`);
    }

    renderSquare(side: number): void {
        console.log(`Drawing Square (side: ${side}) as pixels (raster)`);
    }

    renderTriangle(base: number, height: number): void {
        console.log(`Drawing Triangle (base: ${base}, height: ${height}) as pixels (raster)`);
    }
}