
/***********
 modules
********* */
const config = require("config.json")("./config/config.json");


const gatewayCTRL = require('./controllers/gateway/index');

const groupCTRL = require('./controllers/group/index');
const lightCTRL = require('./controllers/light/index');
const unitSpaceCTRL = require('./controllers/unit_space/index');

const brightnessCTRL = require('./controllers/light/brightness');
const colorTempCTRL = require('./controllers/light/color_temperature');
const colorCTRL = require('./controllers/light/color');
const powerCTRL = require('./controllers/light/power');


const constants = require('./lib/constants');


module.exports = function(message) {
	console.log(message);

  var messageObject = JSON.parse(message);

  var intent = messageObject.intent;
	var userId = messageObject.userId;
	var contentObject = messageObject.contentObject;

	console.log(intent);

  switch (intent) {
    case 'DiscoverGateway':
      gatewayCTRL.discoverGateway(function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'CreateGroup':
			var gatewayObject = contentObject.gatewayObject;
			var groupId = contentObject.groupId;

      groupCTRL.createGroup(gatewayObject, groupId, function(error, resultObject){

				console.log(resultObject);
      });
      break;
    case 'LoadGroupList':
			var gatewayObject = contentObject.gatewayObject;

      groupCTRL.loadGroupList(gatewayObject, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'RemoveGroup':
			var gatewayObject = contentObject.gatewayObject;
			var groupId = contentObject.groupId;

      groupCTRL.removeGroup(gatewayObject, groupId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'AddLightToGroup':
			var gatewayObject = contentObject.gatewayObject;
			var deviceObject = contentObject.deviceObject;
			var groupId = contentObject.groupId;

      groupCTRL.addLightToGroup(gatewayObject, deviceObject, groupId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'LoadLightListFromGroup':
			var gatewayObject = contentObject.gatewayObject;
			var groupId = contentObject.groupId;

      groupCTRL.loadLightListFromGroup(gatewayObject, groupId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'RemoveLightFromGroup':
			var gatewayObject = contentObject.gatewayObject;
			var deviceObject = contentObject.deviceObject;
			var groupId = contentObject.groupId;

      groupCTRL.removeLightFromGroup(gatewayObject, deviceObject, groupId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'CreateLight':
			var gatewayObject = contentObject.gatewayObject;
			var lightId = contentObject.lightId;

      lightCTRL.createLight(gatewayObject, lightId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'LoadLight':
			var gatewayObject = contentObject.gatewayObject;
			var lightId = contentObject.lightId;

      lightCTRL.loadLight(gatewayObject, lightId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'RemoveLight':
			var gatewayObject = contentObject.gatewayObject;
			var lightId = contentObject.lightId;

      lightCTRL.removeLight(gatewayObject, lightId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'LoadLightList':
			var gatewayObject = contentObject.gatewayObject;

      lightCTRL.loadLightList(gatewayObject, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'CreateUnitSpace':
			var gatewayObject = contentObject.gatewayObject;
			var uSpaceName = contentObject.uSpaceName;

      unitSpaceCTRL.createUnitSpace(gatewayObject, uSpaceName, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'LoadUnitSpaceList':
			var gatewayObject = contentObject.gatewayObject;

	    unitSpaceCTRL.loadUnitSpaceList(gatewayObject, function(error, resultObject){

	      console.log(resultObject);
	    });
      break;
    case 'RemoveUnitSpace':
			var gatewayObject = contentObject.gatewayObject;
			var uSpaceId = contentObject.uSpaceId;

      unitSpaceCTRL.removeUnitSpace(uSpaceId, function(error, resultObject){


        console.log(resultObject);
      });
      break;
    case 'AddLightToUnitSpace':

      break;
    case 'AddGroupToUnitSpace':

      break;
    case 'LoadLightListFromUnitSpace':
			var gatewayObject = contentObject.gatewayObject;
			var uSpaceId = contentObject.uSpaceId;

      unitSpaceCTRL.loadLightListFromUnitSpace(gatewayObject, uSpaceId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'LoadGroupLightListFromUnitSpace':
			var gatewayObject = contentObject.gatewayObject;
			var groupId = contentObject.groupId;
			var uSpaceId = contentObject.uSpaceId;

      unitSpaceCTRL.loadGroupLightListFromUnitSpace(gatewayObject, groupId, uSpaceId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'RemoveLightFromUnitSpace':
			var gatewayObject = contentObject.gatewayObject;
			var groupId = contentObject.groupId;
			var uSpaceId = contentObject.uSpaceId;
      unitSpaceCTRL.removeGroupFromUnitSpace(gatewayObject, groupId, uSpaceId, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'TurnOn':
			var gatewayObject = contentObject.gatewayObject;
			var uSpaceId = contentObject.uSpaceId;
			var unit = contentObject.unit;
			var unitId = contentObject.unitId;

      powerCTRL.handlePower(gatewayObject, uSpaceId, unit, unitId, constants.SL_API_POWER_ON, constants.DEFAULT_POWER_LEVEL, function(error, resultObject){
        var speechOutput = 'turn on the ' + uSpaceName + ' ' + unitId + ' ' + unit;


        console.log(resultObject);
      });
      break;
    case 'TurnOff':
			var gatewayObject = contentObject.gatewayObject;
			var uSpaceId = contentObject.uSpaceId;
			var unit = contentObject.unit;
			var unitId = contentObject.unitId;

      powerCTRL.handlePower(gatewayObject, uSpaceId, unit, unitId, constants.SL_API_POWER_OFF, constants.DEFAULT_POWER_LEVEL, function(error, resultObject){
        var speechOutput = 'turn off the ' + uSpaceName + ' ' + unitId + ' ' + unit;

        console.log(resultObject);
      });
      break;
    case 'AdjustPowerLevel':
			var gatewayObject = contentObject.gatewayObject;
			var unit = contentObject.unit;
			var unitId = contentObject.unitId;
			var command = contentObject.command;

      powerCTRL.adjustPowerLevel(gatewayObject, unit, unitId, command, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'SetPowerLevel':
			var gatewayObject = contentObject.gatewayObject;
			var uSpaceId = contentObject.uSpaceId;
			var unit = contentObject.unit;
			var unitId = contentObject.unitId;
			var powerLevel = contentObject.powerLevel;

      powerCTRL.handlePower(gatewayObject, uSpaceId, unit, unitId, constants.SL_API_POWER_ON, powerLevel, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'AdjustBrightness':
			var gatewayObject = contentObject.gatewayObject;
			var unit = contentObject.unit;
			var unitId = contentObject.unitId;
			var command = contentObject.command;

      brightnessCTRL.adjustBrightness(gatewayObject, unit, unitId, command, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'SetBrightness':
			var gatewayObject = contentObject.gatewayObject;
			var uSpaceId = contentObject.uSpaceId;
			var unit = contentObject.unit;
			var unitId = contentObject.unitId;
			var brightness = contentObject.brightness;

      brightnessCTRL.setBrightness(gatewayObject, uSpaceId, unit, unitId, brightness, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'SetColor':
			var gatewayObject = contentObject.gatewayObject;
			var uSpaceId = contentObject.uSpaceId;
			var unit = contentObject.unit;
			var unitId = contentObject.unitId;
			var color = contentObject.color;

      colorCTRL.handleColor(gatewayObject, uSpaceId, unit, unitId, color, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'AdjustColorTemperature':
			var gatewayObject = contentObject.gatewayObject;
			var unit = contentObject.unit;
			var unitId = contentObject.unitId;
			var command = contentObject.command;

      colorTempCTRL.adjustColorTemperature(gatewayObject, unit, unitId, command, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    case 'SetColorTemperature':
			var gatewayObject = contentObject.gatewayObject;
			var uSpaceId = contentObject.uSpaceId;
			var unit = contentObject.unit;
			var unitId = contentObject.unitId;
			var colorTemperature = contentObject.colorTemperature;

      colorTempCTRL.setColorTemperature(gatewayObject, uSpaceId, unit, unitId, colorTemperature, function(error, resultObject){

        console.log(resultObject);
      });
      break;
    default:

      break;
  }
};
