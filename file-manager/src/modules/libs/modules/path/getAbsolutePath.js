import path from 'path';

const getAbsolutePath = (filename) => {
    const __dirname = process.cwd();

    return path.join(__dirname, filename);
}

export default getAbsolutePath;