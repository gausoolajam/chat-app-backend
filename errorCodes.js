var errorCodes = {};

errorCodes.SUCCESS = 0;
errorCodes.ERROR = -1;
errorCodes.UNABLE_TO_CONNECT_TO_DATABASE = 1;
errorCodes.SQL_ERROR = 2;
errorCodes.MONGODB_ERROR = 3;

module.exports = errorCodes;