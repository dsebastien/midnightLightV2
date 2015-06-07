'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins

import config from '../config';
import utils from '../utils';

import gulpNpmFiles from 'gulp-npm-files';

gulp.task('copy-npm-dependencies', 'Copy NPM dependencies to the temp build folder (useful for scripts and stylesheets during development)', () =>{
	return utils.plumbedSrc(
			gulpNpmFiles(), {
				base: './'
			}
	)

	// Only take changed files into account
	.pipe($.changed(config.folders.temp, {}))

	// Copy files
	.pipe(gulp.dest(config.folders.temp))

	// Task result
	.pipe($.size({
		title: 'copy-npm-dependencies'
	}));
});
