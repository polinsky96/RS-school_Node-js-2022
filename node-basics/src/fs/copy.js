import path from 'path';
import { fileURLToPath } from 'url';
import { opendir, cp } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const srcDir = path.join(__dirname, './files');
    const distDir = path.join(__dirname, './copy_files');

    opendir(srcDir, (err, dir) => {
        try {    
            const myError = 'FS operation failed';

            if (!dir) throw Error(myError);
            
            cp(srcDir, distDir, { recursive: true, force: false, errorOnExist: true },  error => {
                if (error) throw Error(myError);
            });

        } catch (error) {
            console.log(error);
        }
    });
};

copy();