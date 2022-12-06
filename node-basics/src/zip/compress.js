import { fileURLToPath } from 'url';
import path from 'path';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    pipeline(
        createReadStream(path.join(__dirname, './files/fileToCompress.txt')),
        createGzip(),
        createWriteStream(path.join(__dirname, './files/archive.gz')),
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    )
}

await compress();