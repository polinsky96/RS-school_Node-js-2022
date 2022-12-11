import { createInterface } from 'readline/promises';

import commandParser from './parsers/commandParser.js';

import { changeDirectory, consoleDirectory, list } from './modules/nwd/index.js';
import { setFileCommand, isFileCommand } from './modules/file/file.js';
import getOSinformation from './modules/os/index.js';
import calculateHash from './modules/hash/hash.js';
import compress from './modules/compress/index.js';
import decompress from './modules/decompress/index.js';

const usernameArg = process.argv
    .slice(2)
    .filter(arg => arg.includes('--username'));

//set default username;
let username = 'User';

if (usernameArg.length !== 0) {
    username = usernameArg[0].replace('--username=', '');
}

//catch ctrl + C;
process.on('SIGINT', () => {
    process.exit(0);
});

process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
});

console.log(`Welcome to the File Manager, ${username}!`);

//Show the current directory on first launch;
consoleDirectory();

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

//Functions such as: cp, mv, compress, decompress take the path of the new directory in the form
// 'C:\Users\some-user\...';
rl.on('line', (input) => {
    //['command', 'sourceFile', ?'finiteFile'];
    const command = commandParser(input);

    switch (command[0]) {
        case '.exit':
            process.exit(0);

        case 'up':
        case 'cd':
            changeDirectory(command);
            break;

        case 'ls':
            list();
            break;

        //The module "file" provides a list of valid commands
        case isFileCommand(command[0]):
            setFileCommand(command);
            break;

        case 'os':
            getOSinformation(command[1]);
            break;

        case 'hash':
            calculateHash(command[1]);
            break;

        case 'compress': 
            compress(command);
            break;

        case 'decompress':
            decompress(command);
            break;

        default:
            console.log('invalid command');
            break;
    }

    consoleDirectory();
});