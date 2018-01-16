/**
 * Module Dependencies
 */
module.exports = function(server) {

	// 2.5 Group API
	// 2.5.1 Register group
	/**
	 * POST
	 */
	server.post('/group', (req, res, next) => {
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

    res.send(200, resultObject);
    next();
	});


  // 2.5.5 Remove Group
  /**
   * DELETE
   */
  server.del('/group/:gdid', (req, res, next) => {
    // req.params
  	const gdid = req.params.gdid;

    let data = {};

    data.sync = new Date().toJSON();

    let resultObject = {};

  	resultObject.result_code = "200";
  	resultObject.result_msg = "Success";
    resultObject.result_data = data;

    res.send(200, resultObject);
  	next();
  });


	// 2.5.7 Control Light Group Status Information
	/**
	 * UPDATE
	 */
	server.put('/group/:gdid/light', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}

    // req.params
    const gdid = req.params.gdid || 1;

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
    const onlevel = req.body.onlevel || 100;


		let resultObject = {};

		resultObject.result_code = "200";
		resultObject.result_msg = "Success";

		res.send(200, resultObject);
	});
};
