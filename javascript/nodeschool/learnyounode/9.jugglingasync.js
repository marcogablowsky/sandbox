var http = require('http'),
    urls = [process.argv[2],process.argv[3],process.argv[4]],
    collected = ['','',''],
    pendingCalls = 0;

var checkComplete = function(){
    if(pendingCalls === 0){
        collected.forEach(function(data){
            console.log(data);
        })
    }
};

var readUrl = function(url){
    var resultIndex = pendingCalls;

    pendingCalls++;
    http.get(url, function(response){
        response.setEncoding('utf8');
        response.on("data", function(data){
            collected[resultIndex] = collected[resultIndex].concat(data);
        });
        response.on("end",function(){
            pendingCalls--;
            checkComplete();
        });
    }).on('error', function(e){
        throw e;
    });
};

urls.forEach(function(url){
    readUrl(url);
});