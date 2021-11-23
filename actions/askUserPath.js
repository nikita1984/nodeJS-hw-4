const readline = require('readline');


function askUserPath() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("Write your path: ", (data) => {
        console.log("Data:", data);
        rl.close();
    });

    rl.on('close', () => {
        process.exit(0);
    });
}

module.exports = askUserPath;