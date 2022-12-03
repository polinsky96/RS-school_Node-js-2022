import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, './files/fresh.txt');

    fs.open(filePath,'r', (fileExists, file) => {
        try {
            if (!fileExists) throw Error('FS operation failed');
            
            fs.writeFile(filePath, 'I am fresh and young', (error) => {
                if (error) throw error
            })

        } catch (error) {
            console.log(error);
        }
    })
}

await create();