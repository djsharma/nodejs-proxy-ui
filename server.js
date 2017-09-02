/*
* @Author: dhananjaysharma
* @Date:   2017-09-02 03:03:30
* @Last Modified by:   dhananjaysharma
* @Last Modified time: 2017-09-02 16:06:01
*/

'use strict';
var express = require('express');
var http = require('http');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./config/server.conf');
var logger = require('morgan');
var middleware = require('./middlewares/middleware');
//create app for express
var app = express();
var router = express.Router();

//server middlware hook
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//logger to requests
app.use(logger('combined'));

//external middleware hook
app.use(middleware.middle);

//server initialization on express
var server = app.listen(config.dev.SERVER_PORT,function (arg) {
		console.log('proxy-node-ui-server listening PORT: '+ server.address().port);
	});
