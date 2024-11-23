import { Renderer } from "../interfaces/renderer";

export abstract class Shape {
    protected renderer: Renderer;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    abstract draw(): string; // Method to draw the shape
}