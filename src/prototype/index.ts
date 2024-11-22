import { Circle } from "./concrete-classes/circle";
import { Rectangle } from "./concrete-classes/rectangle";
import { Triangle } from "./concrete-classes/triangle";

// Original shapes
const circle = new Circle(10);
const rectangle = new Rectangle(20, 15);
const triangle = new Triangle(25, 30);

// Cloning shapes
const clonedCircle = circle.clone();
const clonedRectangle = rectangle.clone();
const clonedTriangle = triangle.clone();

// Drawing original and cloned shapes
console.log("Original Shapes:");
circle.draw();
rectangle.draw();
triangle.draw();

console.log("\nCloned Shapes:");
clonedCircle.draw();
clonedRectangle.draw();
clonedTriangle.draw();