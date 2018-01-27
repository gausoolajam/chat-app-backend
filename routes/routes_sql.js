var express = require("express");
var router = express.Router(); 
// var connection = require('../databaseType/mysqlDB.js');
var service= require('./service.js');
// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get("/", function(req, res) {
	service.allClientInfo(req, res);
});

module.exports = router;