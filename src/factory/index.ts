import { FileFactory } from "./factory-class/file-factory";


try {
    const textFile = FileFactory.createFile('text', 'example.txt', 'This is a text file.');
    textFile.save();

    const jsonFile = FileFactory.createFile('json', 'example.json', '{"key": "value"}');
    jsonFile.save();

    const xmlFile = FileFactory.createFile('xml', 'example.xml', '<root><key>value</key></root>');
    xmlFile.save();
} catch (error) {
    console.error(error.message);
}
