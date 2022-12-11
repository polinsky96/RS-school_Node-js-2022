import {createReadStream, createWriteStream } from 'fs';
import { access, unlink } from 'fs/promises';
import { operationFailed } from '../../libs/modules/constants/error.js';
import path from 'path';

const mv = async (sourceFilePath, newDirPath) => {
    try {        
        await access(sourceFilePath);
        
        const sourceFileName = path.parse(sourceFilePath).base;
        const newFilePath = path.join(newDirPath, sourceFileName);

        if (sourceFilePath === newFilePath) {
            console.log('The file already exists');
            return
        }

        const readableStream = createReadStream(sourceFilePath, "utf8");
        const writeableStream = createWriteStream(newFilePath);
    
        readableStream.on('error', () => {
            console.log(operationFailed);
        })
        
        writeableStream.on('error', () => {
            console.log(operationFailed);
        })

        writeableStream.on('finish', () => {
            unlink(sourceFilePath);
        })
    
        readableStream.pipe(writeableStream);
    } catch {
        console.log(operationFailed);
    }  
};

export default mv;