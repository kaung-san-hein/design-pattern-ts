import { Shape } from "../interfaces/shape";

export class Rectangle implements Shape {
    constructor(public width: number, public height: number) { }

    clone(): Shape {
        return new Rectangle(this.width, this.height); // Creates a new Rectangle with the same dimensions
    }

    draw(): void {
        console.log(`Drawing a Rectangle with width: ${this.width}, height: ${this.height}`);
    }
}