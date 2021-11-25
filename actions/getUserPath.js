const path = require('path');

const isAbsolutePath = function (inputString){
    return path.isAbsolute(inputString);
}

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