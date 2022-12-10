import path from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { operationFailed } from '../libs/modules/constants/error.js';
import getAbsolutePath from '../libs/modules/path/getAbsolutePath.js';

const compress = async (command) => {
    const fileName = command[1];
    const pathToFile = getAbsolutePath(command[1]);
    const pathToDestination = command[2];

    try {
        await access(pathToFile);

        const newFilePath = path.join(pathToDestination, fileName + '.br');

        const readableStream = createReadStream(pathToFile);
        const writeableStream = createWriteStream(newFilePath);
        const brotli = zlib.createBrotliCompress();

        pipeline(
            readableStream,
            brotli,
            writeableStream,
            (err) => {
                if (err) {
                    console.log(operationFailed);;
                }
            } 
        )
    } catch(err) {
        console.log(operationFailed);
    }
}

export default compress;