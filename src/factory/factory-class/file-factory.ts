import { File } from '../interfaces/file';
import { TextFile } from '../concrete-classes/text-file';
import { JsonFile } from '../concrete-classes/json-file';
import { XmlFile } from '../concrete-classes/xml-file';

export class FileFactory {
    static createFile(type: string, name: string, content: string): File {
        switch (type.toLowerCase()) {
            case 'text':
                return new TextFile(name, content);
            case 'json':
                return new JsonFile(name, content);
            case 'xml':
                return new XmlFile(name, content);
            default:
                throw new Error(`File type ${type} not supported.`);
        }
    }
}
