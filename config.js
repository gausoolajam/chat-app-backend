var ports = {};
var ENV = process.env.ENVIRONMENT || 'local';
ports.port = process.env.PORT || 3023;
ports.ssl_port = ports.port != 80? parseInt(ports.port) + 1 : 443;

var config = require('./application.config.json')[ENV];

module.exports = { ports: ports, appConfig: config };