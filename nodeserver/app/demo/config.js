module.exports = function(){
    var mongoose = require('mongoose');
    var db = require('./config/db');

    mongoose.connect(db.url); // connect to our mongoDB database
};
