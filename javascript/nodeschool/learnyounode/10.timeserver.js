var net = require('net');

var server = net.createServer(function(socket){
    socket.write('TEST');
    socket.end();
});

server.listen(process.argv[2]);