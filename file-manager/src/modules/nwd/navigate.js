import fs from 'fs/promises';
import path from 'path';

process.chdir(process.env.HOME);

const consoleDirectory = () => {
    console.log(`You are currently in ${process.cwd()}\n`);
}

const changeDirectory = async (command) => {
    let segment;

    if (command[0] === 'up') {
        segment = '..';
    } else {
        segment = command[1];
    }
    
    if (!segment) {
        process.chdir(process.env.HOME);
    } else {
        const newPath = path.resolve(process.cwd(), segment);
    
        try {
            process.chdir(newPath);
        } catch {
            console.log('directory isn\'t exists\n');
        }
    }

    consoleDirectory();
}

export {
    changeDirectory,
    consoleDirectory
}