const fs = require('fs');

const showFileContents = require('./showFileContents');

const getItemsInDirectory = require('./getItemsInDirectory');

const promptUser = require('./promptUser');

const isFile = function (filepath) {
    return fs.lstatSync(filepath).isFile();
}

const isDirectory = function (filepath) {
    return fs.lstatSync(filepath).isDirectory();
}

const getContentFromUserPath = async (filepath) => {
    if (isFile(filepath)){
        await showFileContents(filepath);
    } else if (isDirectory(filepath)) {
        const itemsInDirectory = await getItemsInDirectory(filepath);
        const userChoice = await promptUser(itemsInDirectory, filepath);
        await getContentFromUserPath(userChoice);
    } else {
        console.error("write path to file or directory?");
        process.exit(1);
    }  
}


module.exports = getContentFromUserPath;