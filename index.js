#!/usr/bin/env node

/**
 * Module dependencies.
 */

//process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'development';


const cluster = require('cluster');
const config = require('config.json')('./config/config.json');
const CORS = require('cors')();
const fileStreamRotator = require('file-stream-rotator');
const fs = require('fs');
const morgan  = require('morgan');
const mqtt = require('mqtt');
const os = require('os');
const restify = require('restify');
const routes = require('./routes');

const handler = require('./handler');
const makeGatewayURL = require('./js/make_gateway_URL');

const constants = require('./lib/constants');


// TEMP Gateway IP URL
global.BASE_URL = makeGatewayURL(config.sl.gw.ip, config.sl.gw.port, config.sl.gw.version);

global.APP_NAME = config.app.title;
const port = config.app.port;
const version = config.app.version;

const cpuCount = os.cpus().length;
const logDirectory = './logs';

var worker = [];


// Cluster
cluster.schedulingPolicy = cluster.SCHED_RR;
if(cluster.isMaster) {
  // ensure log directory exists
  if (!fs.existsSync(logDirectory)){
    fs.mkdirSync(logDirectory);
  }

  // create a rotating write stream
  var accessLogStream = fileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: logDirectory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false
  });


  cluster.on('exit', function(worker) {
    console.log('worker' + worker.pid + ' died --> start again');
    cluster.fork();
  });

  console.log("-----------------------------");
  console.log("\t" + global.APP_NAME + " start!\n");
  console.log('CPU Count:', cpuCount);

  var url = "wss://b-8b6a530d-9792-461c-9b07-7103bebe99ec-1.mq.us-east-1.amazonaws.com:61619";
  var option = {
    username : "mac",
    password : "9372153rlaA@"
  }
  var client  = mqtt.connect(url, option);

  client.on('connect', function () {
    const topic = constants.MQTT_REQUEST_TOPIC;

    console.log("subscribe :", topic);
    client.subscribe(topic);

    client.on('message', function (topic, message) {
      // message is Buffer
      messageString = message.toString();
      console.log(messageString);
      handler(messageString);
    });

  });



  for(var i = 0; i < cpuCount; i++) {
    worker[i] = cluster.fork();
  }

}else {
  /**
    * Initialize Server
    */
  const server = restify.createServer({
    name: global.APP_NAME,
    version: version
  });

  /**
    * Middleware
    */
  server.use(morgan('dev'));
  server.use(restify.plugins.jsonBodyParser({ mapParams: true }));
  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.queryParser({ mapParams: true }));
  server.use(restify.plugins.fullResponse());
  server.use(CORS);
	server.use(function(req, res, next){
	  res.setHeader('content-type','application/json');
		next()
	});

  server.listen(port, function(){
    console.log(`Server Listen ${port} port`);

    routes(server);
  });
}
