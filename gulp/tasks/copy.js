'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins

var config = require('../config');
var utils = require('../utils');

gulp.task('copy', 'Copy all files except HTML/CSS/JS which are processed separately', function(){
	return utils.plumbedSrc(
			config.copy.src , {
				dot : true
			})

		// Display the files in the stream
		//.pipe($.debug({title: 'Stream contents:', minimal: true}))

		// Copy
		.pipe(gulp.dest(config.copy.dest))

		// Task result
			.pipe($.size({
				title : 'copy'
			}));
});
