import { Shape } from "../interfaces/shape";

export class Triangle implements Shape {
    constructor(public base: number, public height: number) { }

    clone(): Shape {
        return new Triangle(this.base, this.height); // Creates a new Triangle with the same dimensions
    }

    draw(): void {
        console.log(`Drawing a Triangle with base: ${this.base}, height: ${this.height}`);
    }
}