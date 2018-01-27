var mongoDBConnect = function(router) {

	var db;
	const MongoClient = require('mongodb').MongoClient
	MongoClient.connect('mongodb://root:root@ds153845.mlab.com:53845/node-lab', function(err, database) {
	  	// ... start the server
	  	if (err) return console.log(err)
	  	console.log("db connected");
	  	db = database;
		require("../routes/routes.js")(router,db);
	})
}

module.exports = mongoDBConnect;