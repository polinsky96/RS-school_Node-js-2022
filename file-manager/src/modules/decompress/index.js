import path from 'path';
import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import getAbsolutePath from '../libs/modules/path/getAbsolutePath.js';
import { operationFailed } from '../libs/modules/constants/error.js';

const decompress = async (command) => {
    const fileName = command[1];
    const pathToFile = getAbsolutePath(command[1]);
    const pathToDestination = command[2];

    try {
        await access(pathToFile);

        const newFilePath = path.join(pathToDestination, fileName.replace('.br', ''));
        
        const readableStream = createReadStream(pathToFile);
        const writeableStream = createWriteStream(newFilePath);
        const brotli = zlib.createBrotliDecompress();

        readableStream.pipe(brotli).pipe(writeableStream).on('finish', (err) => {
            if (err) {
                console.log(operationFailed);
            }
        });

    } catch(err) {
        console.log(operationFailed);
    }
}

export default decompress;