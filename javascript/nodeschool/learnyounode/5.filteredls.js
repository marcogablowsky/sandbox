var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    filter = process.argv[3];

fs.readdir(dir, function(err, list){
    if(err){
        throw err;
    }

    list.forEach(function(file){
        if(path.extname(file).indexOf(filter) > -1){
            console.log(file);
        }
    });
});