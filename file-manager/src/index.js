import path from 'path';
import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import { validateCommand } from './validators/commandsValidators.js';
import commandParser from './parsers/commandParser.js';
import { changeDirectory, consoleDirectory } from './modules/nwd/navigate.js';
import list from './modules/nwd/list.js';

const usernameArg = process.argv
    .slice(2)
    .filter(arg => arg.includes('--username'));
let username = 'User';

if (usernameArg.length  !== 0) {
    username = usernameArg[0].replace('--username=', '');
}

console.log(`Welcome to the File Manager, ${username}!\n`);

process.on('SIGINT', () => {
    process.exit(0);
});

process.on('exit', () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
});


const rl = createInterface({ input, output });

rl.on('line', async (input) => {
    const command = commandParser(input);

    // if (validateCommand(command[0])) {
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
    
        default:
            console.log('invalid command\n');
            break;
    }

    // if (command[0] === '.exit') {
    // }

    // if (command[0] === 'cd' || command[0] === 'up') {
    // }

    // if (command)
    // }
});

consoleDirectory();