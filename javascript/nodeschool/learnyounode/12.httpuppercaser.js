var http = require('http');

http.createServer(function (req, res) {
    if (req.method != 'POST')
        return res.end('only POST requests allowed\n')

}).listen(Number(process.argv[2]));