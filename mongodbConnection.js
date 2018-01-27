var poolModule 	= require('generic-pool');
var MongoClient = require('mongodb').MongoClient,
	config 		= require('./config.js'),
	// assert 		= require('assert'),
	mongodbConnection = {},
	maxPoolSize = 5;

var host 		= config.appConfig.mongodb.host,
	port 		= config.appConfig.mongodb.port,
	database 	= config.appConfig.mongodb.dbname,
	username 	= config.appConfig.mongodb.user,
	password 	= config.appConfig.mongodb.password;

var authentication_flag = false,
	mongodbURI = "mongodb://" + host + ":" + port + "/" + database;
    //var mongodbURI = "mongodb://" + username + ":" + password + "@" + host + ":" + port + "/" + database
	
console.log("db called", mongodbURI);
mongodbConnection.read_pool = poolModule.Pool({
    name     : 'redis_offer_payment_reader',
    create   : function(callback) {
        MongoClient.connect(mongodbURI, {}, function (err, db) {
            if (err) {
                callback(err);
            } else {
                callback(null, db);
            }
        });
    },
    destroy  : function(client) { client.close(); },
    max      : 40,
    // optional. if you set this, make sure to drain() (see step 3)
    min      : 2, 
    // specifies how long a resource can stay idle in pool before being removed
    idleTimeoutMillis : 60000,
    // if true, logs via console.log - can also be a function
    log : false 
});

module.exports = mongodbConnection;