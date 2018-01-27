// var mysqlConnection = require('./mysqlDBConnection.js');
var util = {}

util.pushResponseToClients = function (request, response, result, connection) {
	var resultStr = JSON.stringify(result);
	if (request.query && request.query.callback != undefined && request.query.callback != null && request.query.callback != '') {
		response.writeHead(200, { "Content-Type": "application/json" });
		response.write(request.query.callback + "('" + resultStr + "')");
	}
	else {
		response.writeHead(200, { "Content-Type": "application/json" });
		response.write(resultStr);
	}
	
	response.end();
};

module.exports = util;