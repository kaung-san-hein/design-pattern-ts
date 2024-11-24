import { TextGenerator } from "../interfaces/text-generator";

export class StringGenerator implements TextGenerator {
    constructor(private text: string) { }

    generateText(): string {
        return this.text;
    }
}