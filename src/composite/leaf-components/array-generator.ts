import { TextGenerator } from "../interfaces/text-generator";

export class ArrayGenerator implements TextGenerator {
    constructor(private items: string[]) { }

    generateText(): string {
        return this.items.join(", ");
    }
}