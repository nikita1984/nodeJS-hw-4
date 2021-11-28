const { Transform, Stream } = require('stream');
const {EOL} = require('os');
/**
 * Преобразует входной поток в соответсвии с условиями входящего регулярного выражения
 * @param {RegEx} regex - регулярное выражение полученное от пользователя
 * @returns {Stream} отфильтрованный поток в соответствии с требованиями регулярного выражения
 */
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