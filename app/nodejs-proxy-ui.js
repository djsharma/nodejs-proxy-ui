/*
* @Author: dhananjaysharma
* @Date:   2017-09-03 09:53:22
* @Last Modified by:   dhananjaysharma
* @Last Modified time: 2017-09-03 09:54:43
*/
var app = angular.module("app", []);
;/*
* @Author: dhananjaysharma
* @Date:   2017-09-03 09:53:11
* @Last Modified by:   dhananjaysharma
* @Last Modified time: 2017-09-03 09:54:54
*/
app.controller("HelloController", function($scope) {
  $scope.message = "Hello, AngularJS";	
});