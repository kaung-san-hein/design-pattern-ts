import { Circle } from "./concrete-classes/circle";
import { Rectangle } from "./concrete-classes/rectangle";
import { AreaCalculator } from "./concrete-vistor/area-calculator";
import { ShapeRenderer } from "./concrete-vistor/shape-render";
import { Shape } from "./interfaces/shape";

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(10, 20),
];

const areaCalculator = new AreaCalculator();
const shapeRenderer = new ShapeRenderer();

console.log("Calculating Areas:");
shapes.forEach(shape => shape.accept(areaCalculator));

console.log("\nRendering Shapes:");
shapes.forEach(shape => shape.accept(shapeRenderer));