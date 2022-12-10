import os from 'os';

const getOSinformation = (flag) => {
    switch (flag) {
        case '--EOL':
            console.log(os.EOL);
            break;

        case '--cpus': 
            console.log(os.cpus());
            break;
        

        case '--homedir': 
            console.log(os.homedir());
            break;
        

        case '--username': 
            console.log(os.userInfo().username);
            break;
        

        case '--architecture':
            console.log(os.arch());
            break;
    
        default:
            console.log('Invalid command');
            break;
    }
}

export default getOSinformation;