import path from 'path';
import { fileURLToPath } from 'url';
import { open, writeFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, './files/fresh.txt');

    open(filePath,'r', (fileExists, file) => {
        try {
            if (!fileExists) throw Error('FS operation failed');
            
            writeFile(filePath, 'I am fresh and young', (error) => {
                if (error) throw error
            })

        } catch (error) {
            console.log(error);
        }
    })
}

await create();