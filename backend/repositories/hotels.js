const path = require('path');
const fs = require('fs');

const data = fs.readFileSync(path.join(__dirname, '../data/data.json'));

exports.get = function() {
    return JSON.parse(data);
}