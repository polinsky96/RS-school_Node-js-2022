import { createHmac } from 'node:crypto';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const hash = createHmac('sha256', path.join(__dirname, './files/fileToCalculateHashFor.txt'))
               .digest('hex');

    console.log(hash);
};

await calculateHash();