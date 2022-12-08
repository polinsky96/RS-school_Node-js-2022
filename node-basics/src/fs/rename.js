import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { MY_ERROR } from './libs/fs/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, './files/wrongFilename.txt');
const renameFilePath = path.join(__dirname, './files/properFilename.md');

const rename = async () => {
    try {
        await fs.access(filePath);
        await fs.rename(filePath, renameFilePath);
    } catch (error) {
        console.log(MY_ERROR);
    }
}

await rename();