import {createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { operationFailed } from '../../libs/modules/constants/error.js';
import path from 'path';

const cp = async (sourceFilePath, newDirPath) => {     
    try {        
        await access(sourceFilePath);

        const sourceFileName = path.parse(sourceFilePath).base;
        const newFilePath = path.join(newDirPath, sourceFileName);

        const readableStream = createReadStream(sourceFilePath, "utf8");
        const writeableStream = createWriteStream(newFilePath);
    
        readableStream.on('error', () => {
            console.log(operationFailed);
        })
        
        writeableStream.on('error', () => {
            console.log(operationFailed);
        })
    
        readableStream.pipe(writeableStream);
    } catch {
        console.log(operationFailed);
    }   
};

export default cp;