import { TextGenerator } from "../interfaces/text-generator";

export class RangeGenerator implements TextGenerator {
    constructor(private start: number, private end: number) { }

    generateText(): string {
        return Array.from({ length: this.end - this.start + 1 }, (_, i) => this.start + i).join(", ");
    }
}