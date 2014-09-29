var http = require('http'),
    url = process.argv[2],
    collected = '';

http.get(url, function(response){
    response.setEncoding('utf8');
    response.on("data", function(data){
        collected = collected.concat(data);
    });
    response.on("end",function(){
        console.log(collected.length);
        console.log(collected);
    });
}).on('error', function(e){
    throw e;
});