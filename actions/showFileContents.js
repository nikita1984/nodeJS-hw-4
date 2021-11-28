const fs = require('fs');
const transform = require('./transform');

/**
 * асинхронно выводит в консоль содержимое принимаемого файла
 * @param {string} filepath - путь к файлу, для последующей обработки в виде вывода содержимого в консоль
 * @param {RegExp} regex - регулярное выражение для поиска в файле
 * @returns {Promise} Положительный ответ промиса с выводом в консоль содержимого принимаемого файла c учётом переданного ему RegExp
 */
 const showFileContents = async (filepath, regex) => {
    return new Promise((resolve) => {
        const stream = fs.createReadStream(filepath, 'utf-8');
        stream.on('end', resolve);
        if (regex !== null) {
            stream.pipe(transform(regex)).pipe(process.stdout);
        } else {
            stream.pipe(process.stdout);
        }
    });
}

module.exports = showFileContents;