import { Circle } from "../concrete-classes/circle";
import { Rectangle } from "../concrete-classes/rectangle";
import { ShapeVisitor } from "../interfaces/shape-visitor";

export class AreaCalculator implements ShapeVisitor {
    visitCircle(circle: Circle): void {
        const area = Math.PI * Math.pow(circle.radius, 2);
        console.log(`Circle Area: ${area.toFixed(2)}`);
    }

    visitRectangle(rectangle: Rectangle): void {
        const area = rectangle.width * rectangle.height;
        console.log(`Rectangle Area: ${area}`);
    }
}