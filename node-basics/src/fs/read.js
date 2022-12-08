import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { MY_ERROR } from './libs/fs/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, './files/fileToRead.txt');

const read = async () => {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content);
    } catch {
        console.log(MY_ERROR);
    }

};

await read();