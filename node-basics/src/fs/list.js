import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { MY_ERROR } from './libs/fs/constants.js' 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, './files');

const list = async () => {
    try {
        const files = await fs.readdir(dirPath);
        
        files.forEach(f => console.log(f));
    } catch {
        console.log(MY_ERROR);
    }
};

await list();