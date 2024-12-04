import { Circle } from "../concrete-classes/circle";
import { Rectangle } from "../concrete-classes/rectangle";
import { ShapeVisitor } from "../interfaces/shape-visitor";

export class ShapeRenderer implements ShapeVisitor {
    visitCircle(circle: Circle): void {
        console.log(`Rendering a Circle with radius ${circle.radius}`);
    }

    visitRectangle(rectangle: Rectangle): void {
        console.log(`Rendering a Rectangle with width ${rectangle.width} and height ${rectangle.height}`);
    }
}