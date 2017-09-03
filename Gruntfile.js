/*
* @Author: dhananjaysharma
* @Date:   2017-09-03 09:42:59
* @Last Modified by:   dhananjaysharma
* @Last Modified time: 2017-09-03 10:01:01
*/
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['app/scripts/main.js','app/scripts/*.js'],
				dest: 'app/<%= pkg.name %>.js'
			}
		},
		watch: {
			src:{
				files: ['app/scripts/*.js'],
				tasks: ['concat'],
				options: {
       				   atBegin: true
      			}	
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', '', function() {
	    var taskList = [
	        'watch'
	    ];
    	grunt.task.run(taskList);
	});
};