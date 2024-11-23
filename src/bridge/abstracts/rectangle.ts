import { Renderer } from "../interfaces/renderer";
import { Shape } from "./shape";

export class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(renderer: Renderer, width: number, height: number) {
        super(renderer);
        this.width = width;
        this.height = height;
    }

    draw(): string {
        return this.renderer.renderRectangle(this.width, this.height);
    }
}