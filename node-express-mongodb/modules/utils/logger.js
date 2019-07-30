/*
 * Logger based on Winston
 * Configuration is loaded using https://www.npmjs.com/package/config#introduction
 */

var config = require('config');
var logger = require('winston');

var logFileLocation = config.get('Logger.logFile');

logger.add(logger.transports.File, { filename: logFileLocation });

logger.info('Configured logger');

module.exports = logger;
