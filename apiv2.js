var http = require("http");

http.createServer(function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.write('['+
        '{"Status": ""}' +

    ']');
    response.end();
});
