import path from 'path';

const getAbsolutePath = (filename) => {
    try {
        const __dirname = process.cwd();
        const absolutePath = path.join(__dirname, filename);

        return absolutePath;
    } catch {
        console.log('The "path" argument must be of type string');
    }

}

export default getAbsolutePath;