const fs = require('fs');

const showFileContents = require('./showFileContents');

const getItemsInDirectory = require('./getItemsInDirectory');

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
        // console.log("isDirectory");
        console.log(`${filepath} - isDirectory`);
        const itemsInDirectory = await getItemsInDirectory(filepath);
        /*    
            const filepath = await promptUser(filesInDirectory);
            getContentFromUserPath(filepath);
        */
    } else {
        console.log("error");
        console.error("write path to file or directory?");
        process.exit(1);
    }  
}


module.exports = getContentFromUserPath;