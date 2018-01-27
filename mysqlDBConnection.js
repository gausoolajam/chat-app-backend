// var sqlConnection = function(){
	
var mysql      = require('mysql');
var config = require('./config.js');


var host = config.appConfig.mysql.host;
var port = config.appConfig.mysql.port;
var database = config.appConfig.mysql.schema;
var username = config.appConfig.mysql.user;
var password = config.appConfig.mysql.password;

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
	     console.log("Error connecting database .... \n\n");  
	 }
 });

// }

module.exports = connection;