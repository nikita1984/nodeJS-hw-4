const inquirer = require('inquirer');

/**
 * Запрашиваем у пользователя в консоли информацию для дальнейшей обработки
 * @returns {string} строку с информацией полученной от пользователя
 */
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