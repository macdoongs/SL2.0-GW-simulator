
/**
 * Module Dependencies
 */
module.exports = function(server) {

  // 2.3 Gateway API
  // 2.3.1 GW Discovery
	server.get('/gw/v1/gateway/0/discovery', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "gid": 8,
        "gpid": "1234567890AABBCCDD",
        "product_code": "03EF0103ABCDEFGH123456ABCDEFGH12345678",
        "serial_number": "1609123456",
        "iblid": "0004000000000000000000",
        "ip": "192.168.2.97",
        "tcp_port": 8080
      }
    }

		res.send(200, resultObject);
		next();
	});

  // 2.3.2 Load GW Basic Information
	server.get('/gw/v1/gateway/:gid', (req, res, next) => {
		// TODO modify database load

		let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "baisc": {
          "gpid": "1234567890AABBCCDD",
          "product_code": "03EF0103ABCDEFGH123456ABCDEFGH12345678",
          "serial_number": "1609123456",
          "iblid": "0004000000000000000000",
          "ip": "192.168.2.97",
          "tcp_port": 8080
        },
        "version": {
          "hw_version": "1.1.3",
          "os_version": "1.1.2",
          "firmware_version": "1.1.2",
          "protocol_version": "1.1.4",
          "profile_version": "1.1.4"
        },
        "capability": {
          "max_device": 1024,
          "max_group": 256,
          "max_scene": 256,
          "max_scenario": 256,
          "max_schedule": 256,
          "max_unitspace": 256
        }
      }
    }


		res.send(200, resultObject);
		next();
	});


  // 2.3.3 Load GW Resource version
  server.get('/gw/v1/gateway/:gid/resource', (req, res, next) => {
    // TODO modify database load

    let resultObject = {
      "result_code": "200",
      "result_msg": "Success",
      "result_data": {
        "sync": {
          "device": "2017-01-11 13:53:11",
          "group": "2017-01-11 13:53:11",
          "unitspace": "2017-01-11 13:53:11"
        }
      }
    }

    res.send(200, resultObject);
    next();
  });

};
