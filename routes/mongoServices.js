var express = require('express'),
	mongodbConnection = require('../mongodbConnection.js'),
	errorCodes = require('../errorCodes.js'),
	// util = require('../util.js'),
	service = {};
	
service.saveClientInfo = function (request, response, callback) {
    mongodbConnection.read_pool.acquire(function (error, db) {
        if(error){
            return callback(error);
        }
        else{
            function onQueryComplete(error, res){
                if(error){
                    releaseDbObject(db);
                    return callback(null, []);
                }
                else{
                    releaseDbObject(db);
                    return callback(null, clientObj);
                }
            };
            var clientObj = {
                "position": request.body.position,
                "id": request.body.id,
                "weight": request.body.weight,
                "height": request.body.height,
                "imageUrl": request.body.imageUrl,
                "birthplace": request.body.birthplace,
                "age": request.body.age,
                "name": request.body.name,
                "birthdate": request.body.birthdate,
                "number": request.body.number
            };
            db.collection('players').insertOne( clientObj, onQueryComplete )
        }
    });
};
service.getAllClientInfo = function(request, response, callback){
    mongodbConnection.read_pool.acquire(function (error, db) {
        if(error){
            return callback(error);
        }
        else{
            function onQueryComplete(error, res){
                if(error){
                    releaseDbObject(db);
                    return callback(null, []);
                }
                else{
                    releaseDbObject(db);
                    return callback(null, res);
                }
            };
            db.collection('players').find({}).toArray(onQueryComplete)
        }
    });
}

module.exports = service;

function releaseDbObject(db) {
    mongodbConnection.read_pool.release(db);
};