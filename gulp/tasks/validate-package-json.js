'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
import packageJsonValidator from 'gulp-nice-package';

import config from '../config';
import utils from '../utils';

gulp.task('validate-package-json', 'Validate the package.json file', () =>{
	return utils.plumbedSrc(config.files.packageJSON)
		.pipe(packageJsonValidator());
});
