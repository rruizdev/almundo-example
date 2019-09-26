const path = require('path');
const fs = require('fs');

exports.get = function() {
    var rawData = fs.readFileSync(path.join(__dirname, '../data/data.json'));
    return JSON.parse(rawData);
}