#!/usr/bin/env node

/**
 * Module dependencies.
 */

//process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'development';


const cluster = require('cluster');
const config = require('config.json')('./config/config.json');
const os = require('os');
const restify = require('restify');



const cpuCount = os.cpus().length;
const port = config.app.port;
const version = config.app.version;

var worker = [];

global.title = config.app.title;

cluster.schedulingPolicy = cluster.SCHED_RR;

// Cluster
if(cluster.isMaster) {
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
    server.use(restify.plugins.jsonBodyParser({ mapParams: true }));
    server.use(restify.plugins.acceptParser(server.acceptable));
    server.use(restify.plugins.queryParser({ mapParams: true }));
    server.use(restify.plugins.fullResponse());


    server.listen(port, function(){
      console.log(`Server Listen ${port} port`);

      require('./routes')(server);
    });
}
