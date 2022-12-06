import { fileURLToPath } from 'url';
import path from 'path';
import { stdin, stdout } from 'node:process';
import { Transform } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transform = async () => {
    const writeable = stdin;
    const readable = stdout;

    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, `${chunk.toString().split('').reverse().join('')}\n`);
        }
    })

    writeable.pipe(reverse).pipe(readable);
};

await transform();