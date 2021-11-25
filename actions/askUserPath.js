const inquirer = require('inquirer');

const askUserPath = async () => {
        const userInput = 'userInput';

        const result = await inquirer.prompt([{
            name: userInput,
            type: 'input',
            message: 'Write your path: ',
        }]);

        return result[userInput].toString();
}

module.exports = askUserPath;