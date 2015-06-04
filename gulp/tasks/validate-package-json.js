'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var packageJsonValidator = require('gulp-nice-package');

var config = require('../config');
var utils = require('../utils');

gulp.task('validate-package-json', 'Validate the package.json file', function () {
	return utils.plumbedSrc(config.files.packageJSON)
			.pipe(packageJsonValidator());
});
