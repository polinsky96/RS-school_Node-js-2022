import fs from 'fs';
import { operationFailed } from '../../libs/modules/constants/error.js';

const cat = (filePath) => {
    const readable = fs.createReadStream(filePath);

    readable.on('data', (chunc) => {
        process.stdout.write(chunc);
    });

    readable.on('close', () => {
        process.stdout.write('\n\n');
    })

    readable.on('error', (error) => {
        console.log(operationFailed);
    })                                               
};

export default cat;