'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = require('../config');
var utils = require('../utils');

gulp.task('check-js-style', 'Enforce JavaScript code style', function () {
	return utils.plumbedSrc( // handle errors nicely (i.e., without breaking watch)
			config.javascript.src
	)
		// Display the files in the stream
		//.pipe($.debug({title: 'Stream contents:', minimal: true}))

		// Check JS code style (uses .jscsrc)
			.pipe(
			$.jscs({
				esnext: true, // seems broken: https://github.com/jscs-dev/gulp-jscs/issues/69
				fix: false
			})
	)
			.pipe($.jscsStylish()) // log style errors

		// Save modified files
		//.pipe(gulp.dest(config.styles.dest))

		// Task result
			.pipe($.size({
				title: 'check-js-style'
			}));
});
