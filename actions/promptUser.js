const inquirer = require('inquirer');
const path = require('path');

/**
 * отображает в консоли перечень вариантов для выбора пользователем, а затем возвращает полученный 
 * от пользователя вариант
 * @param {Array} choices - перечень содержимого директории, который предлагается на выбор пользователю
 * @param {string} filepath - путь к директории, в которой расположены файлы на выбор
 * @returns {string} - путь к файлу, выбранному пользователем
 */
const promptUser = async (choices, filepath) => {
    const optionKey = 'optionKey';

    const result = await inquirer.prompt([{
        name: optionKey, 
        type: 'list',
        message: 'Please choose file or directory',
        choices, 
    }]);

    return path.join(filepath, result[optionKey]);
}


module.exports = promptUser;