import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const filePath = path.join(__dirname, './files/wrongFilename.txt');
    const renameFilePath = path.join(__dirname, './files/properFilename.md');

    const myError = 'FS operation failed';

    try {
        fs.access(filePath, (err) => {
            if (err) {
                throw Error(myError)
            }
        });

        fs.access(renameFilePath, (err) => {
            if (!err) {
                throw Error(myError)
            }
        });

        fs.rename(filePath, renameFilePath, (err) => {
            if (err) throw Error(myError);
        });
        
    } catch (error) {
        console.log(error);
    }
}

await rename();