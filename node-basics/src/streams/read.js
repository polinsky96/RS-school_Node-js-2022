import { fileURLToPath } from 'url';
import { stdout } from 'node:process';
import { createReadStream } from 'node:fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readable = createReadStream(path.join(__dirname, './files/fileToRead.txt'));

    readable.on('data', (chunc) => {
        stdout.write(chunc)
    })
};

await read();