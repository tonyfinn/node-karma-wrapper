/*jshint node:true */

'use strict';

var runner = require('karma').runner;
var path = require('path');
var spawn = require('child_process').spawn;

function karmaPlugin(opts, done){

  if( opts && opts.configFile){
    opts.configFile = path.join(process.cwd(), opts.configFile);
  }

  var args = [path.join(__dirname , 'lib', 'server_process.js'), JSON.stringify(opts)];
  if( opts && ! opts.background){
    spawn('node', args, { stdio: 'inherit' }, function(){ done(); } );
  }else{
    spawn('node', args);
    done();
  }

}

karmaPlugin.run = function(opts, done){

  if( opts && opts.configFile){
    opts.configFile = path.join(process.cwd(), opts.configFile);
  }

  runner.run(opts, function() { done(); });

};

module.exports = karmaPlugin;
