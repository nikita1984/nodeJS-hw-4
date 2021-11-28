const inquirer = require('inquirer');
/**
 * Запрашиваем у пользователя в консоли регулярное выражение для дальнейшей обраюотки
 * @returns {RegExp} регулярное выражение полученно от пользователя, или {null} при отсутсвии ответа
 */
const askRegularExpression = async () => {
    const userInput = 'userInput';

        const pattern = await inquirer.prompt([{
            name: userInput,
            type: 'input',
            message: 'Write your Regular Expression (pattern) or leave this field blank',
        }]);

        if (pattern[userInput].toString() === ''){
            return null;
        }

        const flag = await inquirer.prompt([{
            name: userInput,
            type: 'input',
            message: 'Write your Regular Expression (flag): ',
        }]);

        return RegExp(pattern[userInput].toString(), flag[userInput].toString());
}

module.exports = askRegularExpression;