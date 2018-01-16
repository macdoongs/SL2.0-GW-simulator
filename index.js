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
const morgan  = require('morgan')
const os = require('os');
const restify = require('restify');
const routes = require('./routes');


const cpuCount = os.cpus().length;
const logDirectory = './logs';
const port = config.app.port;
const version = config.app.version;

var worker = [];

global.title = config.app.title;

cluster.schedulingPolicy = cluster.SCHED_RR;


// Cluster
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
  console.log("\t" + global.title + " start!\n");
  console.log('CPU Count:', cpuCount);

  for(var i = 0; i < cpuCount; i++) {
    worker[i] = cluster.fork();
  }

}else {
  /**
    * Initialize Server
    */
  const server = restify.createServer({
    name: global.title,
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
