export class Canvas {
    draw(shape: string) {
        console.log(`Drawing a ${shape}`);
    }

    resize(shape: string, size: number) {
        console.log(`Resizing ${shape} to size ${size}`);
    }

    erase(shape: string) {
        console.log(`Erasing the ${shape}`);
    }
}
