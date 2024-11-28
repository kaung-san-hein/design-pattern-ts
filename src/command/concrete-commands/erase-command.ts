import { Command } from "../interfaces/command";
import { Canvas } from "../receiver/canvas";

export class EraseCommand implements Command {
    private canvas: Canvas;
    private shape: string;

    constructor(canvas: Canvas, shape: string) {
        this.canvas = canvas;
        this.shape = shape;
    }

    execute() {
        this.canvas.erase(this.shape);
    }

    undo() {
        console.log(`Redrawing ${this.shape}`);
    }
}