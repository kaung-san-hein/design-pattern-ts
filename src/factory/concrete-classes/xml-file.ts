import { File } from '../interfaces/file';

export class XmlFile implements File {
    constructor(public name: string, public content: string) { }

    save(): void {
        console.log(`Saving XML file: ${this.name}`);
    }
}