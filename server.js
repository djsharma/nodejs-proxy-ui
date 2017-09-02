/*
* @Author: dhananjaysharma
* @Date:   2017-09-02 03:03:30
* @Last Modified by:   dhananjaysharma
* @Last Modified time: 2017-09-02 15:59:33
*/

'use strict';
var express = require('express');
var http = require('http');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./config/server.conf');

//create app for express
var app = express();
//server initialization on express
var server = app.listen(config.dev.SERVER_PORT,function (arg) {
		console.log('proxy-node-ui-server listening PORT: '+ server.address().port);
	});
