import { Shape } from "../interfaces/shape";
import { ShapeVisitor } from "../interfaces/shape-visitor";

export class Circle implements Shape {
    constructor(public radius: number) { }

    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this);
    }
}