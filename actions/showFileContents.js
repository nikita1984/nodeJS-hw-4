const fs = require('fs');
const transform = require('./transform');

/**
 * асинхронно выводит в консоль содержимое принимаемого файла
 * @param {string} filepath - путь к файлу, для последующей обработки в виде вывода содержимого в консоль
 * @param {RegExp} regex - регулярное выражение для поиска в файле
 * @returns {Promise} Положительный ответ промиса с содержимым принимаемого файла c учётом переданного ему RegExp
 */
 const showFileContents = async (filepath, regex) => {
    return new Promise((resolve) => {
        const stream = fs.createReadStream(filepath, 'utf-8');
        stream.on('end', resolve);
        stream.pipe(transform(regex)).pipe(process.stdout);
    });
}

module.exports = showFileContents;