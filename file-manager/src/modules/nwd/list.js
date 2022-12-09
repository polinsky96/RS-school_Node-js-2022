import fs from 'fs/promises';

const list = async () => {
    try {
        let files = await fs.readdir(process.cwd(), { withFileTypes: true });

        files = files.map(file => {
            const current = {
                Name: file.name,
                Type: file.isFile() ? 'file' : 'directory' 
            }

            return current
        })

        console.table(files);

    } catch (err) {
        console.error(err);
    }
}

export default list;