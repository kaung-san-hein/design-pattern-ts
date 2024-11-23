import { Renderer } from "../interfaces/renderer";

export class RasterRenderer implements Renderer {
    renderCircle(radius: number): string {
        return `Drawing a raster circle with radius ${radius}`;
    }

    renderRectangle(width: number, height: number): string {
        return `Drawing a raster rectangle with width ${width} and height ${height}`;
    }
}