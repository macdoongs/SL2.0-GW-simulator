/**
 * Module Dependencies
 */
module.exports = function(server) {

	// 2.5 Group API
	// 2.5.1 Register group
	/**
	 * POST
	 */
	server.post('/gw/v1/group', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

    // req.body
		let groupName = req.body.group_name || "test group #1";
		let deviceList = req.body.device_list || [];


    let data = {};
    data.gdid = 16728;
    data.group_name = groupName;

		let resultObject = {};

		resultObject.result_code = "200";
		resultObject.result_msg = "Success";
    resultObject.result_data = data;

    res.send(200, JSON.stringify(resultObject));
    next();
	});

	// 2.5.2 Load Group Information List
	server.get('/gw/v1/group', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"sync": "2017-01-11 14:10:10",
				"group_list": [
					{
						"gdid": 16727,
						"group_name": "Group #1",
						"device_list": [
							{ "iblid": "0001000000000000000001", "did": 1 },
							{ "iblid": "0001000000000000000002"}   // did가 아직 매핑되지 않은 경우
						]
					},
					{
						"gdid": 16728,
						"group_name": "Group #2",
						"device_list": [
							{ "iblid": "0001000000000000000001", "did": 2 },
							{ "iblid": "0001000000000000000002", "did": 3 }
						]
					}
				]
			}
		}

		res.send(200, resultObject);
		next();
	});

	// 2.5.3 Load Group Information
	server.get('/gw/v1/group/:gdid', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"sync": "2017-01-11 14:10:10",
				"basic": {
				"gdid": 16727,
				"group_name": "Group #1",
				"device_list": [
					{ "iblid": "0001000000000000000001", "did": 1 },
					{ "iblid": "0001000000000000000002"}
				]
				}
			}
		}


		res.send(200, resultObject);
		next();
	});

	// 2.5.4 Change Group Information
	server.put('/gw/v1/group/:gdid', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

		let resultObject = {};

		resultObject.result_code = "200";
		resultObject.result_msg = "Success";


		res.send(200, JSON.stringify(resultObject));
		next();
	});

  // 2.5.5 Remove Group
  /**
   * DELETE
   */
  server.del('/gw/v1/group/:gdid', (req, res, next) => {
    // req.params
  	const gdid = req.params.gdid;

    let data = {};

    data.sync = new Date().toJSON();

    let resultObject = {};

  	resultObject.result_code = "200";
  	resultObject.result_msg = "Success";
    resultObject.result_data = data;

    res.send(200, JSON.stringify(resultObject));
  	next();
  });


	// 2.5.6 Control Light Group Status Information
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/group/:gdid/light', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

    // req.params
    const gdid = req.params.gdid || 1;

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
    const onlevel = req.body.onlevel || 100;


		let resultObject = {};

		resultObject.result_code = "200";
		resultObject.result_msg = "Success";

		res.send(200, JSON.stringify(resultObject));
	});

	// 2.5.7 Load Group member Status
	server.get('/gw/v1/group/:gdid/dstatus', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"device_list": [
					{
						"did": 16,
						"light": {
							"onoff": "on",
							"level": 100,
							"colortemp": 5000,
							"hue": 359,
							"saturation": 100,
							"brightness": 100,
							"x": 0.22,
							"y": 0.48,
							"r": 255,
							"g": 255,
							"b": 255
						}
					}
				]
			}
		}


		res.send(200, resultObject);
		next();
	});
};
