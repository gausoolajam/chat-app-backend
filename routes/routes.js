var express = require("express"),
	app = express(),
	router = express.Router(),
	bodyParser = require("body-parser"),
	service= require('./mongoServices.js'),
	util = require('../util.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get("/getAllClients", function(req, res) {
	service.getAllClientInfo(req, res, function(error, data){
		var result = {};
		result.status = 'success';
		if(error)
			result.status = 'error';
		else
			result.data = data;
		return util.pushResponseToClients(req, res, result);
	});
});

router.post('/saveClientInfo', function(req, res){
	console.log("req :", req.body)
	service.saveClientInfo(req, res, function(error, data){
		var result = {};
		result.status = 'success';
		if(error)
			result.status = 'error';
		else
			result.data = data;
		return util.pushResponseToClients(req, res, result);
	});
});
 
module.exports = router;