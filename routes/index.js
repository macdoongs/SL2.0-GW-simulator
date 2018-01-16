/**
 * Module Dependencies
 */
const deviceAPI = require('./device/index');
const groupAPI = require('./group/index');

module.exports = function(server) {
	deviceAPI(server);
	groupAPI(server);
};
