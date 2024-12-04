import { ImageFilter } from "../interfaces/image-filter";

export class SepiaFilter implements ImageFilter {
    applyFilter(image: string): void {
        console.log(`Applying Sepia filter to ${image}`);
    }
}