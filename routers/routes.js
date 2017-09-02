/*
* @Author: dhananjaysharma
* @Date:   2017-09-02 16:10:18
* @Last Modified by:   dhananjaysharma
* @Last Modified time: 2017-09-02 16:10:20
*/
'use strict'

var express = require('express');
var router = express.Router();

function load(router){
	
	router.route('/new')
		.get(function (request,response){
			response.send('new route');
		});
	router.route('/health')
		.get(function (request,response){
			response.json({'health': 'OK'});
		})		

}


exports.load = load;
