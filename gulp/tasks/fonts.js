'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins

var config = require('../config');
var utils = require('../utils');

gulp.task('fonts', 'Copy fonts for production', function () {
	return utils.plumbedSrc(
			config.fonts.src
	)

		// Copy files
			.pipe(gulp.dest(config.fonts.dest))

		// Task result
			.pipe($.size({
				title: 'fonts'
			}));
});
