import { argv } from 'node:process';

const parseArgs = () => {
    return argv.slice(2)
        .reduce((acc, cur, i, arr) => {
            if (i % 2 === 0) acc.push(`${cur} is ${arr[i + 1]}`);
            return acc
        }, []).join(', ')
    
};

console.log(parseArgs());