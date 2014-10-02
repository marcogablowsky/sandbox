var net = require('net'),

    zeroFill = function(i) {
        return (i < 10 ? '0' : '') + i
    },

    now = function(){
        var d = new Date()
        return d.getFullYear() + '-'
            + zeroFill(d.getMonth() + 1) + '-'
            + zeroFill(d.getDate()) + ' '
            + zeroFill(d.getHours()) + ':'
            + zeroFill(d.getMinutes())
    };

net.createServer(function(socket){
    socket.end(now() + '\n')
}).listen(process.argv[2]);