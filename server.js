/*
* @Author: dhananjaysharma
* @Date:   2017-09-02 03:03:30
* @Last Modified by:   dhananjaysharma
* @Last Modified time: 2017-09-02 15:18:36
*/

'use strict';
var express = require('express');
var http = require('http');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

//create app for express
var app = express();
//server initialization on express
var server = app.listen(8080,function (arg) {
		console.log('proxy-node-ui-server listening PORT: '+ server.address().port);
	});
