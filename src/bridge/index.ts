import { Circle } from "./abstracts/circle";
import { Rectangle } from "./abstracts/rectangle";
import { RasterRenderer } from "./concrete-classes/raster-renderer";
import { VectorRenderer } from "./concrete-classes/vector-renderer";

// Client Code
const vectorRenderer = new VectorRenderer();
const rasterRenderer = new RasterRenderer();

// Circle with Vector Renderer
const vectorCircle = new Circle(vectorRenderer, 10);
console.log(vectorCircle.draw());

// Rectangle with Vector Renderer
const vectorRectangle = new Rectangle(vectorRenderer, 20, 15);
console.log(vectorRectangle.draw());

// Circle with Raster Renderer
const rasterCircle = new Circle(rasterRenderer, 10);
console.log(rasterCircle.draw());

// Rectangle with Raster Renderer
const rasterRectangle = new Rectangle(rasterRenderer, 20, 15);
console.log(rasterRectangle.draw());
