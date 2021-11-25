const inquirer = require('inquirer');

/**
 * отображает в консоли перечень вариантов для выбора пользователем, а затем возвращает полученный 
 * от пользователя вариант
 * @param {Array} choices - перечень вариантов, которые далее предлагается на выбор пользователю
 * @returns {string} - путь к файлу, выбранному пользователем
 */
const promptUser = async (choices) => {
    const optionKey = 'optionKey';

    const result = await inquirer.prompt([{
        name: optionKey, 
        type: 'list',
        message: 'Please choose a file or directory',
        choices, 
    }]);

    return result[optionKey];
}


module.exports = promptUser;