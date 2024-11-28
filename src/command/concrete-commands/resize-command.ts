import { Command } from "../interfaces/command";
import { Canvas } from "../receiver/canvas";

export class ResizeCommand implements Command {
    private canvas: Canvas;
    private shape: string;
    private size: number;

    constructor(canvas: Canvas, shape: string, size: number) {
        this.canvas = canvas;
        this.shape = shape;
        this.size = size;
    }

    execute() {
        this.canvas.resize(this.shape, this.size);
    }

    undo() {
        console.log(`Undoing resize of ${this.shape}`);
    }
}