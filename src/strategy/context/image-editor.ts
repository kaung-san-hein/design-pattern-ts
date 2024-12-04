import { ImageFilter } from "../interfaces/image-filter";

export class ImageEditor {
    private filter: ImageFilter;

    constructor(filter: ImageFilter) {
        this.filter = filter;
    }

    setFilter(filter: ImageFilter): void {
        this.filter = filter;
    }

    applyFilter(image: string): void {
        this.filter.applyFilter(image);
    }
}