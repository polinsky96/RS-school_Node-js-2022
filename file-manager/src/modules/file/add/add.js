import fs from 'fs/promises';
import { operationFailed } from '../../libs/modules/constants/error.js';

const add = async (filePath) => {
    try {
        await fs.writeFile(filePath, '', { flag: 'wx' });
    } catch {
        console.log(operationFailed);
    }
}

export default add;