var mongoose = require('mongoose');

module.exports = mongoose.model('Game', {
    name: String,
    description: String,
    cards: [{imageLink: String}],
    thumbnailLink: String
});