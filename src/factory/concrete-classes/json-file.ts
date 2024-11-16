import { File } from '../interfaces/file';

export class JsonFile implements File {
    constructor(public name: string, public content: string) { }

    save(): void {
        console.log(`Saving JSON file: ${this.name}`);
    }
}