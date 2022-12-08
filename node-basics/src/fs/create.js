import path from 'path';
import { fileURLToPath } from 'url';
import  fs from 'fs/promises';
import { MY_ERROR } from './libs/fs/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, './files/fresh.txt');

const create = async () => {
    try {
        await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' })
    } catch (error) {
        console.log(MY_ERROR);
    }
}

await create();