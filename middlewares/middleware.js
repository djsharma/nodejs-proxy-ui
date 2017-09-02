/*
* @Author: dhananjaysharma
* @Date:   2017-09-02 16:04:43
* @Last Modified by:   dhananjaysharma
* @Last Modified time: 2017-09-02 16:04:57
*/
//probable proxy api handling here
exports.middle = function (request,response,next){
	// console.log('middleware checked');
	next();
}