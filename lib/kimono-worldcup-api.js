
var kimonoWorldCup = require('./kimono-worldcup-api-wrapper.js');

module.exports = function (apiKey) {
    return new kimonoWorldCup(apiKey);
};