const inquirer = require('inquirer');

const askRegularExpression = async () => {
    const userInput = 'userInput';

        const pattern = await inquirer.prompt([{
            name: userInput,
            type: 'input',
            message: 'Write your Regular Expression (pattern): ',
        }]);

        const flag = await inquirer.prompt([{
            name: userInput,
            type: 'input',
            message: 'Write your Regular Expression (flag): ',
        }]);

        return RegExp(pattern[userInput].toString(), flag[userInput].toString());
        // console.log('regex: ', regex);
        // return regex;
}

module.exports = askRegularExpression;