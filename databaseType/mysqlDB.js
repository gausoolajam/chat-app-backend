// var sqlConnection = function(){
	
var mysql      = require('mysql');
var config = require('./config.js');


var host = config.appConfig.mongodb.host;
var port = config.appConfig.mongodb.port;
var database = config.appConfig.mongodb.dbname;
var username = config.appConfig.mongodb.user;
var password = config.appConfig.mongodb.password;

var connection = mysql.createConnection({
   host     : host,
   user     : username,
   password : password,
   database : database
});

connection.connect(function(err){
	 if(!err) {
	     console.log("Database is connected ... \n\n");  
	     // require("../routes/routes_sql.js")(connection);
	 } else {
	     console.log("Error connecting database ... \n\n");  
	 }
 });

// }

module.exports = connection;