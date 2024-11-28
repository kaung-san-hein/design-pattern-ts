import { DrawCommand } from "./concrete-commands/draw-command";
import { EraseCommand } from "./concrete-commands/erase-command";
import { ResizeCommand } from "./concrete-commands/resize-command";
import { CommandInvoker } from "./invoker/command-invoker";
import { Canvas } from "./receiver/canvas";

// Initialize the receiver and invoker
const canvas = new Canvas();
const invoker = new CommandInvoker();

// Create commands
const drawCircle = new DrawCommand(canvas, "circle");
const resizeCircle = new ResizeCommand(canvas, "circle", 20);
const eraseCircle = new EraseCommand(canvas, "circle");

// Execute commands
invoker.executeCommand(drawCircle);  // Output: Drawing a circle
invoker.executeCommand(resizeCircle); // Output: Resizing circle to size 20
invoker.executeCommand(eraseCircle);  // Output: Erasing the circle

// Undo commands
invoker.undoLastCommand(); // Output: Redrawing circle
invoker.undoLastCommand(); // Output: Undoing resize of circle
invoker.undoLastCommand(); // Output: Erasing the circle
