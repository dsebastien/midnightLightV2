'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins

var config = require('../config');
var utils = require('../utils');

gulp.task('images', 'Optimize images', function () {
	return utils.plumbedSrc(
			config.images.src
	)

		// Minify and cache
			.pipe($.cache($.imagemin({
				progressive: true,
				interlaced: true
			})))

		// Output files
			.pipe(gulp.dest(config.images.dest))

		// Task result
			.pipe($.size({
				title: 'images'
			}));
});
