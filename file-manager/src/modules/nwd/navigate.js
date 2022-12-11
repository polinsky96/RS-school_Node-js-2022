import path from 'path';

process.chdir(process.env.HOME);

const consoleDirectory = () => {
    console.log(`\nYou are currently in ${process.cwd()}`);
}

//FIXME: add go to :d

const changeDirectory = async (command) => {
    let segment = command[0] === 'up' ? '..' : command[1];
    
    if (!segment) {
        process.chdir(process.env.HOME);
    } else {
        const newPath = path.resolve(process.cwd(), segment);
    
        try {
            process.chdir(newPath);
        } catch {
            console.log('\ndirectory isn\'t exists\n');
        }
    }
}

export {
    changeDirectory,
    consoleDirectory
}