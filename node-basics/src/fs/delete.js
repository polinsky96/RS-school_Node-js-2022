import path from 'path';
import { fileURLToPath } from 'url';
import { unlink, access } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.join(__dirname, './files/fileToRemove.txt');

    const myError = 'FS operation failed';

    try {
        access(filePath, (err) => {
            if (err) {
                throw Error(myError)
            }
        });

        unlink(filePath, (err) => {
            if (err) throw Error(myError);
        });
        
    } catch (error) {
        console.log(error);
    }
};

await remove();