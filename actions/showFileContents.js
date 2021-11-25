const fs = require('fs');

/**
 * асинхронно выводит в консоль содержимое принимаемого файла
 * @param {string} filepath - путь к файлу, для последующей обработки в виде вывода содержимого в консоль
 * @returns {Promise} Положительный ответ промиса с содержимым принимаемого файла
 */
 const showFileContents = async (filepath) => {
    return new Promise((resolve) => {
        const stream = fs.createReadStream(filepath, 'utf-8');
        stream.on('end', resolve);
        stream.pipe(process.stdout);
    });
}

module.exports = showFileContents;