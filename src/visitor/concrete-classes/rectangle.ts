import { Shape } from "../interfaces/shape";
import { ShapeVisitor } from "../interfaces/shape-visitor";

export class Rectangle implements Shape {
    constructor(public width: number, public height: number) { }

    accept(visitor: ShapeVisitor): void {
        visitor.visitRectangle(this);
    }
}