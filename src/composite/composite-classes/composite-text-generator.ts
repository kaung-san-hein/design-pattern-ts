import { TextGenerator } from "../interfaces/text-generator";

export class CompositeTextGenerator implements TextGenerator {
    private children: TextGenerator[] = [];

    add(generator: TextGenerator): void {
        this.children.push(generator);
    }

    remove(generator: TextGenerator): void {
        this.children = this.children.filter(child => child !== generator);
    }

    generateText(): string {
        return this.children.map(child => child.generateText()).join("\n");
    }
}
