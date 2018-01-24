/**
 * Module Dependencies
 */
module.exports = function(server) {

	// 2.6 Unit space API
	// 2.6.1 Register unit space
	/**
	 * POST
	 */
	server.post('/gw/v1/uspace', (req, res, next) => {
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
    next();
	});


	// 2.6.2 Load unit space List
	/**
	 * GET
	 */
	server.get('/gw/v1/uspace', (req, res, next) => {
		let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10",
        "uspace_list": [
          {
            "uspace_id": 12303,
            "uspace_name": "Lobby",
            "uspace_type": "01",
            "device_list": [
              { "iblid": "0001000000000000000001", "did": 2 },
              { "iblid": "0001000000000000000002" }
            ],
            "gdid_list": [16727, 16728]
          }
        ]
      }
    }


	 res.send(200, resultObject);
	 next();
	});

  // 2.6.3 Load unit space Information
	/**
	 * GET
	 */
	server.get('/gw/v1/uspace/:usid', (req, res, next) => {
		let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10",
        "basic": {
          "uspace_id": 1,
          "uspace_name": "Lobby",
          "uspace_type": "01",
          "operation_mode": "M",
          "onoff": "on",
          "cur_scene_id": 1,
          "cur_scenario_id": 1,
          "cur_schedule_id": 1,
          "device_list": [
            { "iblid": "0001000000000000000001", "did": 2 },
            { "iblid": "0001000000000000000002" }
          ],
          "gdid_list": [16727, 16728],
          "sync_scene": "2017-01-11 13:10:11",
          "sync_scenario": "2017-01-11 13:10:32",
          "sync_schedule": "2017-01-11 14:10:32"
        }
      }
    }

	 res.send(200, resultObject);
	 next();
	});

  // 2.6.4
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/uspace/:usid', (req, res, next) => {
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


	// 2.6.5
	/**
	 * DELETE
	 */
	server.del('/gw/v1/uspace/:usid', (req, res, next) => {

    let resultObject = {};

		resultObject.result_code = "200";
		resultObject.result_msg = "Success";

    res.send(200, resultObject);
		next();
	});



  // 2.6.6
	/**
	 * GET
	 */
	server.get('/gw/v1/uspace/:usid/status', (req, res, next) => {
		let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10",
        "basic": {
          "level_rate": 100,
          "operation_mode": "M",
          "onoff": "on"
        }
      }
    }

    res.send(200, resultObject);
    next();
	});


  // 2.6.7
  /**
	 * UPDATE
	 */
	server.put('/gw/v1/uspace/:usid/status', (req, res, next) => {
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


  // 2.6.8
  /**
   * GET
   */
  server.get('/gw/v1/uspace/:usid/status', (req, res, next) => {
    let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "device_list": [
          {
            "did": 16,
            "lihgt": {
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

  // 2.6.9
  /**
   * GET
   */
  server.get('/gw/v1/uspace/:usid/device', (req, res, next) => {
    let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10",
        "device_list": [
          {
            "did": 2,
            "iblid": "0001000000000000000000"
          },
          {
            "did": 3,
            "iblid": "0001000000000000000000"
          }
        ]
      }
    }


    res.send(200, resultObject);
    next();
  });

  // 2.6.10
	/**
	 * POST
	 */
	server.post('/gw/v1/uspace/:usid/group', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}


		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"gdid" : 16728,
        "group_name": "Group #2"
			}
		}

    res.send(200, resultObject);
    next();
	});


  // 2.6.11
	server.get('/gw/v1/uspace/:usid/group', (req, res, next) => {
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
            { "iblid": "0001000000000000000002"}
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

  // 2.4.13
  /**
   * UPDATE
   */
  server.put('/gw/v1/uspace/:usid/group/:gdid', (req, res, next) => {
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

  // 2.6.14
	/**
	 * DELETE
	 */
	server.del('/gw/v1/uspace/:usid/group/:gdid', (req, res, next) => {

    let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10"
      }
    }


    res.send(200, resultObject);
		next();
	});

  // 2.6.15
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/uspace/:usid/group/:gdid/light', (req, res, next) => {
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

  // 2.6.16
	server.get('/gw/v1/uspace/:usid/group/:gdid/dstatus', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "device_list": [
          {
            "did": 16,
            "lihgt": {
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

  // 2.6.17
	/**
	 * POST
	 */
	server.post('/gw/v1/uspace/:usid/scene', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}


		let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "scid": 3,
        "scene_name": "Scene #2"
      }
    }


    res.send(200, resultObject);
    next();
	});








  // 2.6.18
	server.get('/gw/v1/uspace/:usid/scene', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10",
        "scene_list": [
          {
            "scid": 2,
            "scene_name": "Scene #1",
            "device_list": [
              { "iblid": "0001000000000000000001", "did": 1 },
              { "iblid": "0001000000000000000002", "did": 2 }
            ],
            "gdid_list": [16727, 16728]
          },
          {
            "scid": 3,
            "scene_name": "Scene #2",
            "device_list": [
              { "iblid": "0001000000000000000002", "did": 2 },
              { "iblid": "0001000000000000000003", "did": 3 }
            ],
            "gdid_list": [16727, 16728]
          }
        ]
      }
    }


		res.send(200, resultObject);
		next();
	});

  // 2.6.19
	server.get('/gw/v1/uspace/:usid/scene/:scid', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10",
        "basic": {
          "scid": 16727,
          "scene_name": "Scene #1",
          "device_list": [
            {
              "did": 2,
              "onoff": "on",
              "level": 100,
              "colortemp": 5000,
              "hue": 359,
              "saturation": 100,
              "brightness": 100
            },
            {
              "did": 3
            }
          ],
          "gdid_list": [
            {
              "gdid":16727,
              "onoff": "on",
              "level": 100,
              "colortemp": 5000
            },
            {
              "gdid":16728
            }
          ]
        }
      }
    }


		res.send(200, resultObject);
		next();
	});

  // 2.6.20
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/uspace/:usid/scene/:scid', (req, res, next) => {
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

  // 2.6.21
	/**
	 * DELETE
	 */
	server.del('/gw/v1/uspace/:usid/scene/:scid', (req, res, next) => {

    let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10"
      }
    }


    res.send(200, resultObject);
		next();
	});

  // 2.6.22
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/uspace/:usid/scene/:scid/status', (req, res, next) => {
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

  // 2.6.23
  server.get('/gw/v1/uspace/:usid/scene/:scid/dstatus', (req, res, next) => {
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
          },
          {
            "gdid": 32776,
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

  // 2.6.24
	/**
	 * POST
	 */
	server.post('/gw/v1/uspace/:usid/schedule', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'")
			);
		}


		let resultObject = {
			"result_code": "200",
			"result_msg": "Success",
			"result_data": {
				"shid" : 3
			}
		}

    res.send(200, resultObject);
    next();
	});


  // 2.6.25
  server.get('/gw/v1/uspace/:usid/schedule', (req, res, next) => {
    // TODO modify database load

    let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10",
        "schedule_list": [
          {
            "shid": 2,
            "schedule_name": "Schedule #1",
            "status": "active"
          },
          {
            "shid": 3,
            "schedule_name": "Schedule #2",
            "status": "inactive"
          }
        ]
      }
    }


    res.send(200, resultObject);
    next();
  });


  // 2.6.26
  server.get('/gw/v1/uspace/:usid/schedule/:shid', (req, res, next) => {
    // TODO modify database load

    let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10",
        "basic": {
          "shid": 3,
          "schedule_name":" Schedule #2",
          "schedule_tasks": [
            {
              "task_id": 1,
              "period": "0 9 * * *",
              "snid": 1
            }
          ]
        }
      }
    }

    res.send(200, resultObject);
    next();
  });

  // 2.6.27
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/uspace/:usid/schedule/:shid', (req, res, next) => {
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

  // 2.6.28
	/**
	 * DELETE
	 */
	server.del('/gw/v1/uspace/:usid/schedule/:shid', (req, res, next) => {

    let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": "2017-01-11 14:10:10"
      }
    }

    res.send(200, resultObject);
		next();
	});

  // 2.6.29
	/**
	 * UPDATE
	 */
	server.put('/gw/v1/uspace/:usid/schedule/:shid/status', (req, res, next) => {
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

  // 2.6.30
  server.get('/gw/v1/uspace/:usid/schedule/:shid/dstatus', (req, res, next) => {
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
          },
          {
            "gdid": 32776,
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
