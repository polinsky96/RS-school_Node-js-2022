import path from 'path';
import { fileURLToPath } from 'url';
import { readFile, access } from 'node:fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, './files/fileToRead.txt');

    const myError = 'FS operation failed';

    access(filePath, (err) => {
        if (err) throw Error(myError)
    })

    readFile(filePath, 'utf8', (err, data) => {
        if (err) throw Error(myError)

        console.log(data);
    });
};

await read();