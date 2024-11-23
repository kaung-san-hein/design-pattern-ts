import { Renderer } from "../interfaces/renderer";
import { Shape } from "./shape";

export class Circle extends Shape {
    private radius: number;

    constructor(renderer: Renderer, radius: number) {
        super(renderer);
        this.radius = radius;
    }

    draw(): string {
        return this.renderer.renderCircle(this.radius);
    }
}