import { ShapeVisitor } from "./shape-visitor";

export interface Shape {
    accept(visitor: ShapeVisitor): void;
}