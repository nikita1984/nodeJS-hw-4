const path = require('path');

const isAbsolutePath = function (inputString){
    return path.isAbsolute(inputString);
}

/**
 * Конструирует абсолютный путь к файлу или директории
 * @param {string} inputString - строка с предположительно путём к целевой директории или файлу от пользователя
 * @returns {string} - абсолютный путь к файлу или директории 
 */
const getUserPath = async (inputString) => {
    const resultPath = await new Promise((resolve) => {
        if (isAbsolutePath(inputString)) {
            resolve(inputString);
        } else {
            const CWD = process.cwd();
            resolve(path.join(CWD, inputString));
        }
    });
    return resultPath.toString();
}

module.exports = getUserPath;