import { fileURLToPath } from 'url';
import path from 'path';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { Unzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    pipeline(
        createReadStream(path.join(__dirname, './files/archive.gz')),
        Unzip(),
        createWriteStream(path.join(__dirname, './files/fileToCompress.txt')),
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    )
}

await decompress();