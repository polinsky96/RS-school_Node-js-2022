import fs from 'fs/promises';
import { operationFailed } from '../../libs/modules/constants/error.js';

const rm = async (filePath) => {
    try {
        await fs.unlink(filePath);
    } catch {
        console.log(operationFailed);
    }
};

export default rm;