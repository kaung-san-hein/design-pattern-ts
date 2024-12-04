import { Circle } from "../concrete-classes/circle";
import { Rectangle } from "../concrete-classes/rectangle";

export interface ShapeVisitor {
    visitCircle(circle: Circle): void;
    visitRectangle(rectangle: Rectangle): void;
}