const askUserPath = require('./actions/askUserPath');


(async () => {
    askUserPath();

    // console.log(userPath); 
    /*
    getContentFromUserInput (userPath);
    */
})();



/*

function getContentFromUserInput (userPath) {
    if (isFile(userInput)){
        await showFileContents(path.join(CWD, userPath));
    } else {
        const filesInDirectory = await getFileNamesInDirectory(userPath);
        const userInput = await promptUser(filesInDirectory);
        getContentFromUserInput(userInput);
    }
}
*/