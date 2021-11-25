const fs = require('fs');

/**
 * Метод, для получения содержимого из целевой аудитории 
 * @param {string} directory - путь к целевой директории
 * @returns {Array} - возвращает файлы из целевой аудитории в виде списка-массива
 */
 const getItemsInDirectory = async (directory) => {
    // получаем содержимое целевой директории из файлов и папков
    const itemsInDirectory = await new Promise((resolve) => {
        // fs.readdir - асинхронный метод для чтения содержимого заданной в аргументе директории
        fs.readdir(directory, (err, data) => {
            resolve(data);
        });
    });

    return itemsInDirectory;
}

module.exports= getItemsInDirectory;
