module.exports = function(path, filter, callback){
    var fs = require('fs'),
        pathmod = require('path');

    fs.readdir(path,function(err,list){
        if(err){
            return callback(err);
        }
        list = list.filter(function(file){
            return pathmod.extname(file).indexOf(filter) > -1;
        });
        callback(null,list);
    });
};
