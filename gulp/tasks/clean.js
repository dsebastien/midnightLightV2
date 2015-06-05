'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var del = require('del');

var config = require('../config');
var utils = require('../utils');

gulp.task('clean', 'Clean output directories',
		del.bind(null, [
			config.folders.temp,
			config.folders.dist + config.globs.any,
			utils.exclude(config.folders.dist + '/.git')
		], {
			dot : true
		})
);
