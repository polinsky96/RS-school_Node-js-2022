import { createHmac } from 'node:crypto';

const calculateHash = (filePath) => {
    const hash = createHmac('sha256', filePath)
               .digest('hex');

    console.log(hash);
};

export default calculateHash;