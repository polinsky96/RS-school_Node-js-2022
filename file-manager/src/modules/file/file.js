import cat from "./cat/cat.js";
import add from "./add/add.js";
import rn from "./rn/rn.js";
import cp from './cp/cp.js';
import mv from "./mv/mv.js";
import rm from "./rm/rm.js";

import getAbsolutePath from "../libs/modules/path/getAbsolutePath.js";

const avaliableCommands = [ 'cat', 'add', 'rn', 'cp', 'mv', 'rm' ];

const isFileCommand = (command) => {
    const index = avaliableCommands.indexOf(command)

    if (index !== -1) {
        return avaliableCommands[index];
    } else {
        return false
    }
}

const setFileCommand = (command) => {
    switch (command[0]) {
        case 'cat':
            cat(getAbsolutePath(command[1]));
            break;

        case 'add':
            add(getAbsolutePath(command[1]));
            break;

        case 'rn':
            rn(
                getAbsolutePath(command[1]),
                getAbsolutePath(command[2])
            );
            break;

        case 'cp':
            cp(
                getAbsolutePath(command[1]),
                command[2]
            );
            break;

        case 'mv':
            mv(
                getAbsolutePath(command[1]),
                command[2]
            );
            break;

        case 'rm':
            rm(getAbsolutePath(command[1]));
            break;
    
        default:
            console.log('Invalid command');
            break;
    }
}

export { 
    setFileCommand,
    isFileCommand
}