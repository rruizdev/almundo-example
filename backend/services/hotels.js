const repository = require('../repositories/hotels');

exports.get = function() {
    return repository.get();
}