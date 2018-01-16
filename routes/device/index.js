/**
 * Module Dependencies
 */
module.exports = function(server) {

	// 2.4 Device API
	// 2.4.3 Connect Device
	/**
	 * POST
	 */
	server.post('/device/:did', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		// req.params
		let did = req.params.did;

		// req.body
		let dpid = req.body.dpid || "1234567890AABBCCDD";
		let iblid = req.body.iblid || "0004000000000000000000";


		let resultObject = {};

		resultObject.result_code = "200";
		resultObject.result_msg = "Success";

    res.send(200, resultObject);
    next();
	});

	// 2.4.4 Remove Device
	/**
	 * DELETE
	 */
	server.del('/device/:did', (req, res, next) => {
		// req.params
		const did = req.params.did;

		// req.query
		const dpid = req.query.dpid || "1234567890AABBCCDD";
		const iblid = req.query.iblid || "0004000000000000000000";

    let resultObject = {};

		resultObject.result_code = "200";
		resultObject.result_msg = "Success";

    res.send(200, resultObject);
		next();
	});

	// 2.4.5 Change Device Information
	// 2.4.5.3 Control Light Status Information
	/**
	 * UPDATE
	 */
	server.put('/device/:did/light', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		// req.params
		const did = req.params.did;

		// req.body
    const onoff = req.body.onoff || "on";
    const level = req.body.level || 1000;
    const colorTemp = req.body.colorTemp || 5000;
    const hue = req.body.hue || 359;
    const saturation = req.body.saturation || 100;
    const brightness = req.body.brightness || 100;
    const x = req.body.x || 0.22;
    const y = req.body.y || 0.48;
    const r = req.body.r || 255;
    const g = req.body.g || 255;
    const b = req.body.b || 255;
    const tt = req.body.tt || 0;
    const move = req.body.move || "left";


		let data = req.body || {};

		let resultObject = {};

		resultObject.result_code = "200";
		resultObject.result_msg = "Success";

		res.send(200, resultObject);
	});

	// 2.4.6 Load Device Information
	// 2.4.6.4 Load Light Status Information
	/**
	 * GET
	 */
	server.get('/device/:did/light', (req, res, next) => {
		// TODO modify database load
		const onoff = "on";
    const level = 1000;
    const colorTemp = 5000;
    const hue = 359;
    const saturation = 100;
    const brightness = 100;
    const x = 0.22;
    const y = 0.48;
    const r = 255;
    const g = 255;
    const b = 255;


		let data = {};

		data.onoff = onoff;
		data.level = level;
		data.colorTemp = colorTemp;
		data.hue = hue;
		data.saturation = saturation;
		data.brightness = brightness;
		data.x = x;
		data.y = y;
		data.r = r;
		data.g = g;
		data.b = b;


		let resultObject = {};

		resultObject.result_code = "200";
		resultObject.result_msg = "Success";
		resultObject.result_data = data;

		res.send(200, resultObject);
		next();
	});

};
