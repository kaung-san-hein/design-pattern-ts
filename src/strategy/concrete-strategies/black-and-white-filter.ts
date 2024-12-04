import { ImageFilter } from "../interfaces/image-filter";

export class BlackAndWhiteFilter implements ImageFilter {
    applyFilter(image: string): void {
        console.log(`Applying Black and White filter to ${image}`);
    }
}