import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const isUsername = () => {
    const usernameArg = process.argv
        .slice(2)
        .filter(arg => arg.includes('--username'));
    let username = 'User';

    if (usernameArg.length  !== 0) {
        username = usernameArg[0].replace('--username=', '');
    }

    console.log(`Welcome to the File Manager, ${username}!`);

    process.on('SIGINT', () => {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    });
}

const rl = createInterface({ input, output });

rl.on('line', (input) => {
    if (input === '.exit') {
        process.exit(0);
    }

    console.log(`Received: ${input}`);
});

isUsername();