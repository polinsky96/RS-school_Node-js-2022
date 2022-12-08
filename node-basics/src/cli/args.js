import { argv } from 'node:process';

const parseArgs = () => {
    return argv.slice(2)
        .reduce((acc, cur, i, arr) => {
            if (i % 2 === 0) {
                const prop = cur.replace('--', '');
                const value = arr[i + 1];

                acc.push(`${prop} is ${value}`);
            }

            return acc
        }, []).join(', ')
    
};

console.log(parseArgs());