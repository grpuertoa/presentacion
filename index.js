//crear servidor manualmente

const http = require('http');

function identificacion() {
	const nombre = "Gabriel Puerto Ardila";
	const documento = 1013668065;
	const objeto = {nombre, documento};
	return JSON.stringify(objeto);
};

const server = http.createServer(function (request, response) {
	if (request.url == "/presentacion" && request.method == "GET"){
		response.writeHead(200, {'Content-type' : 'aplication/json'});
		response.write(identificacion());
		response.end();
	} else {
		response.writeHead(403, {'Content-type' : 'text/html'});
		response.write("<h1> 403 FORBIDDEN </h1>");
		response.end();
	}
});

server.listen(3000, "0.0.0.0", function() {
	console.log('Server on port 3000');
});
