/**
 * Module Dependencies
 */
const errors = require('restify-errors');


module.exports = function(server) {

	/**
	 * POST
	 */
	server.post('/device', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let data = req.body || {};

    res.send(200, data);
    next();
	});

	/**
	 * GET
	 */
	server.get('/device/:deviceId', (req, res, next) => {
    let data = req.body || {};

		res.send(200, data);
		next();
	});

	/**
	 * UPDATE
	 */
	server.put('/device/:deviceId/light', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let data = req.body || {};

		res.send(200, data);
	});

	/**
	 * DELETE
	 */
	server.del('/device/:deviceId', (req, res, next) => {
    let data = req.body || {};

    res.send(200, data);
		next();
	});
};
