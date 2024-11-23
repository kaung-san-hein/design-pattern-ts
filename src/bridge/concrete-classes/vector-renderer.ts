import { Renderer } from "../interfaces/renderer";

export class VectorRenderer implements Renderer {
    renderCircle(radius: number): string {
        return `Drawing a vector circle with radius ${radius}`;
    }

    renderRectangle(width: number, height: number): string {
        return `Drawing a vector rectangle with width ${width} and height ${height}`;
    }
}