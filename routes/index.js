/**
 * Module Dependencies
 */
const gatewayAPI = require('./gateway/index');
const deviceAPI = require('./device/index');
const groupAPI = require('./group/index');

module.exports = function(server) {
	gatewayAPI(server);
	deviceAPI(server);
	groupAPI(server);
};
