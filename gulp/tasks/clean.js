'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var del = require('del');

import config from '../config';
import utils from '../utils';

gulp.task('clean', 'Clean output directories',
	del.bind(null, [
			config.folders.temp,
			config.folders.dist + config.globs.any,
			utils.exclude(config.folders.dist + '/.git')
		], {
		dot : true
		}
	)
);
