'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins

import config from '../config';
import utils from '../utils';

gulp.task('fonts-dist', 'Copy fonts for production', () =>{
	return utils.plumbedSrc(
			config.fonts.srcVendorOnly
	)

	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))

	// Copy files
	.pipe(gulp.dest(config.fonts.destDist))

	// Task result
	.pipe($.size({
		title: 'fonts-dist'
	}));
});
