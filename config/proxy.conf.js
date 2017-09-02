/*
* @Author: dhananjaysharma
* @Date:   2017-09-02 16:14:35
* @Last Modified by:   dhananjaysharma
* @Last Modified time: 2017-09-02 16:27:22
*/
'use strict';

var genericApiProxy = require('express-http-proxy');
var URL = require('url');
var CONFIG = require('../config/server.conf');

genericApiProxy = genericApiProxy(CONFIG.dev.GENERIC_HANDLE, {
    forwardPath: function(request, response) {
      var forward_url = '/api/gen'+request.url;
      return URL.parse(forward_url).path;
    }  
});

exports.genericApiProxy = genericApiProxy;
