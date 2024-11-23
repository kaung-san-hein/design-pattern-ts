export interface Renderer {
    renderCircle(radius: number): string;
    renderRectangle(width: number, height: number): string;
}