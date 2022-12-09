const commands = ['.exit', 'cd', 'up'];

const validateCommand = (command) => {
    const selectedCommand = commands.filter(c => c === command);

    if (selectedCommand.length === 0) {
        console.log('Invalid input\n');

        return false
    } else {
        return true
    }
}

export {
    validateCommand
}