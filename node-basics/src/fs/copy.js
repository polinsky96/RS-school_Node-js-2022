import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { MY_ERROR } from './libs/fs/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, './files');
const distDir = path.join(__dirname, './copy_files');

const copy = async () => {
    try {
        fs.cp(srcDir, distDir, { recursive: true, force: false, errorOnExist: true }, error => {
            if (error) throw error
        });
    } catch (error) {
        console.log(MY_ERROR);
    }
};

copy();