import { File } from "../interfaces/file"

export class TextFile implements File {
    constructor(public name: string, public content: string) { }

    save(): void {
        console.log(`Saving text file: ${this.name}`);
    }
}
