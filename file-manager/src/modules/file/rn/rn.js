import fs from 'fs/promises';
import { operationFailed } from '../../libs/modules/constants/error.js';

const rn = async (filePath, renameFilePath) => {
    try {        
        await fs.access(filePath);
        await fs.rename(filePath, renameFilePath);
    } catch {
        console.log(operationFailed);
    }
}

export default rn;