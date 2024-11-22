import { Shape } from "../interfaces/shape";

export class Circle implements Shape {
    constructor(public radius: number) { }

    clone(): Shape {
        return new Circle(this.radius); // Creates a new Circle with the same radius
    }

    draw(): void {
        console.log(`Drawing a Circle with radius: ${this.radius}`);
    }
}