import { fileURLToPath } from 'url';
import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const writeable = createWriteStream(path.join(__dirname, './files/fileToWrite.txt'));

    stdin.on('data', (data) => {
        writeable.write(data);
    })
};

await write();