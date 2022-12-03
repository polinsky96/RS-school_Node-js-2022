import path from 'path';
import { fileURLToPath } from 'url';
import { readdir, access } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const dirPath = path.join(__dirname, './files');
    const myError = 'FS operation failed';

    try {
        access(dirPath, (err) => {
            if (err) {
                throw Error(myError)
            }
        });

        readdir(dirPath, (err, files) => {
            if (err) throw Error(myError);

            console.log(files);
        });
        
    } catch (error) {
        console.log(error);
    }
};

await list();