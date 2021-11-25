const askUserPath = require('./actions/askUserPath');


(async () => {
    const userInput = await askUserPath();

    console.log('userInput:', userInput); 
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