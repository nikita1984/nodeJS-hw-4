const { Transform } = require('stream');
const {EOL} = require('os');

const transform = function (regex) {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
        const transformedChunk = chunk.toString();

        const found = transformedChunk.match(regex);
        const commaSymbol = ','
        const foundString = found.join(`${commaSymbol}${EOL}`)
        
        this.push(foundString);
        
        callback();
        }
    });
    return transformStream;
}

module.exports = transform;