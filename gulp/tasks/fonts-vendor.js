'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins

import config from '../config';
import utils from '../utils';

gulp.task('fonts-vendor', 'Copy vendor fonts for dev', () =>{
	return utils.plumbedSrc(
			config.fonts.srcVendorOnly // application fonts are copied by the 'copy' task
	)

	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))

	// speed things up by ignoring unchanged resources
	.pipe($.changed(config.fonts.dest))

	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))

	// Copy files
	.pipe(gulp.dest(config.fonts.dest))

	// Task result
	.pipe($.size({
		title: 'fonts-vendor'
	}));
});
