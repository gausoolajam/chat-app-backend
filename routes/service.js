var express = require('express');
// var connection = require('../mongodbConnection.js');
var connection = require('../mysqlDBConnection.js');
var errorCodes = require('../errorCodes.js');
var util = require('../util.js');

var router = express.Router();

var service = {};



service.allClientInfo = function (request, response) {
    connection.query('SELECT * from client_info', function(error, rows, fields) {
        if (!error){
            return util.pushResponseToClients(request, response, rows, connection);
        }
        else{
            return util.pushResponseToClients(request, response, error, connection);
        }
     });
};

module.exports = service;