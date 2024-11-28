import { Command } from "../interfaces/command";
import { Canvas } from "../receiver/canvas";

export class DrawCommand implements Command {
    private canvas: Canvas;
    private shape: string;

    constructor(canvas: Canvas, shape: string) {
        this.canvas = canvas;
        this.shape = shape;
    }

    execute() {
        this.canvas.draw(this.shape);
    }

    undo() {
        this.canvas.erase(this.shape);
    }
}