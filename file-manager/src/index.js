import { createInterface } from 'readline/promises';

import commandParser from './parsers/commandParser.js';

import { changeDirectory, consoleDirectory, list } from './modules/nwd/index.js';
import { setFileCommand, isFileCommand } from './modules/file/file.js';
import getOSinformation from './modules/os/index.js';
import calculateHash from './modules/hash/hash.js';
import compress from './modules/compress/index.js';

const usernameArg = process.argv
    .slice(2)
    .filter(arg => arg.includes('--username'));

let username = 'User';

if (usernameArg.length !== 0) {
    username = usernameArg[0].replace('--username=', '');
}

process.on('SIGINT', () => {
    process.exit(0);
});

process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
});

console.log(`Welcome to the File Manager, ${username}!`);
consoleDirectory();

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

compress(['compress', 'test.txt', 'C:\\Users\\johnp_000\\testFolder\\']);

rl.on('line', (input) => {
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

        default:
            console.log('invalid command');
            break;
    }

    consoleDirectory();
});