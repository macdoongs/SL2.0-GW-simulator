/**
 * Module Dependencies
 */
module.exports = function(server) {

	// 2.4 Device API
	// 2.4.1 Register Device
	/**
	 * POST
	 */
	server.post('/gw/v1/device', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}


		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"did" : 2
			}
		}

    res.send(200, resultObject);
    next();
	});


	// 2.4.2 Load Device List
	/**
	 * GET
	 */
	server.get('/gw/v1/device', (req, res, next) => {
		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"sync": "2017-01-11 14:10:10",
				"device_list": [
					{
						"did": 1,
						"dpid": "1234567890AABBCCDC",
						"product_code": "03EF0103ABCDEFGH123456ABCDEFGH12345677",
						"serial_number": "1609123455",
						"iblid": "0001000000000000000000",
						"device_status": 0,
						"fault_status": 0000000000000000
					},
					{
						"did": 2,
						"dpid": "1234567890AABBCCDD",
						"product_code": "03EF0103ABCDEFGH123456ABCDEFGH12345678",
						"serial_number": "1609123456",
						"iblid": "0001000000000000000000",
						"device_status": 0,
						"fault_status": 0000000000000000
					},
					{
						"did": 3,
						"dpid": "1234567890AABBCCDE",
						"product_code": "03EF0103ABCDEFGH123456ABCDEFGH12345679",
						"serial_number": "1609123457",
						"iblid": "0001000000000000000000",
						"device_status": 2,
						"fault_status": 8000000000000000
					}
				]
			}
		};

	 res.send(200, resultObject);
	 next();
	});


	// 2.4.3 Connect Device
	/**
	 * POST
	 */
	server.post('/gw/v1/device/:did', (req, res, next) => {
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
	server.del('/gw/v1/device/:did', (req, res, next) => {
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
	// 2.4.5.1 Modify Basic Information
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/device/:did/dinfo', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success"
		}

		res.send(200, resultObject);
	});

	// 2.4.5.2 Modify Module Information
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/device/:did/module', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success"
		}

		res.send(200, resultObject);
	});

	// 2.4.5.3 Control Light Status Information
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/device/:did/light', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		// req.params
		const did = req.params.did;

		// req.body
    const onoff = req.body.onoff || "on";
    const level = req.body.level || 100;
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

	// 2.4.5.4 Change light configuration
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/device/:did/lightconfig', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success"
		}

		res.send(200, resultObject);
	});

	// 2.4.5.5 Change Sensor Information
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/device/:did/lightconfig', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success"
		}

		res.send(200, resultObject);
	});

	// 2.4.5.6 Change Presence Sensor Information
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/device/:did/presence', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success"
		}

		res.send(200, resultObject);
	});

	// 2.4.5.7 Change Illuminance Sensor Information
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/device/:did/illuminance', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success"
		}

		res.send(200, resultObject);
	});

	// 2.4.5.8 Change Temperature Sensor Information
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/device/:did/temperature', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success"
		}

		res.send(200, resultObject);
	});


	// 2.4.6 Load Device Information
	// 2.4.6.1 Load All Information
	server.get('/gw/v1/device/:did', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"sync": "2017-01-11 14:10:10",
				"dinfo": {
					"did": 2,
					"dpid": "1234567890AABBCCDD",
					"product_code": "03EF0103ABCDEFGH123456ABCDEFGH12345678",
					"serial_number": "1609123456",
					"iblid": "0001000000000000000000"
				},
				"mcnt": {

				},
				"light": {
					"onoff":"on",
					"level":100,
					"colortemp":5000,
					"hue":359,
					"saturation":100,
					"brightness":100,
					"x":0.22,
					"y":0.48,
					"r":255,
					"g":255,
					"b":255
				},
				"presence": {

				},
				"illuminance": {

				},
				"temperature": {

				}
			}
		}

		res.send(200, resultObject);
		next();
	});

	// 2.4.6.2 Load Basic Information
	server.get('/gw/v1/device/:did/dinfo', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"sync": "2017-01-11 14:10:10",
				"did": 2,
				"dpid": "1234567890AABBCCDD",
				"product_code": "03EF0103ABCDEFGH123456ABCDEFGH12345678",
				"serial_number": "1609123456",
				"iblid": "0001000000000000000000",
				"module_cnt":1,
				"in_module_cnt":1,
				"ex_module_cnt":0
			}
		}

		res.send(200, resultObject);
		next();
	});

	// 2.4.6.3 Load Module Information
	server.get('/gw/v1/device/:did/module', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"module_cnt": 3,
				"in_module_cnt": 2,
				"ex_module_cnt": 1,
				"module": [
					{
						"mid": 0,
						"mclass": "l",
						"type": 3,
						"form": "in"
					},
					{
						"mid": 1,
						"mclass": "c",
						"type": 3,
						"form": "in"
					},
					{
						"mid": 2,
						"mclass": "s",
						"type": 1,
						"form": "ex"
					}
				]
			}
		}


		res.send(200, resultObject);
		next();
	});


	// 2.4.6.4 Load Light Status Information
	/**
	 * GET
	 */
	server.get('/gw/v1/device/:did/light', (req, res, next) => {
		// TODO modify database load
		const onoff = "on";
    const level = 100;
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

	// 2.4.6.5 Load Light configuration
	server.get('/gw/v1/device/:did/lightconfig', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"on_off_tt": 0,
				"dimup_tt": 0,
				"dimdown_tt": 0,
				"on_hold_time": 65535,
				"off_hold_time": 65535,
				"on_delay_time": 65535,
				"off_delay_time": 65535,
				"color_tt": 0,
				"onlevel": 100
			}
		}

		res.send(200, resultObject);
		next();
	});

	// 2.4.6.6 Load Sensor Information
	server.get('/gw/v1/device/:did/sensor', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"staus": 1,
				"opmode": 1,
				"mperiod": 5000
			}
		}

		res.send(200, resultObject);
		next();
	});

	// 2.4.7 Save device configuration
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/device/:did/configsave', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success"
		}

		res.send(200, resultObject);
	});

};
