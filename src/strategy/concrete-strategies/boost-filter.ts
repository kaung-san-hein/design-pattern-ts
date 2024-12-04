import { ImageFilter } from "../interfaces/image-filter";

export class BoostFilter implements ImageFilter {
    applyFilter(image: string): void {
        console.log(`Applying Boost filter to ${image}`);
    }
}