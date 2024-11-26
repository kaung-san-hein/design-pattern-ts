import { IImageGenerator } from "../interfaces/iimage-generator";

// Real Subject
export class ImageGenerator implements IImageGenerator {
    generateImage(prompt: string): string {
        console.log(`Generating image for prompt: "${prompt}"`);
        // Simulate image generation logic
        return `Image(${prompt})`;
    }
}
