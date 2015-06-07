'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins
import browserSync from 'browser-sync';

import config from '../config';
import utils from '../utils';

gulp.task('ts-lint', 'Lint TypeScript code', () =>{
	return utils.plumbedSrc( // handle errors nicely (i.e., without breaking watch)
			config.typescript.srcAppOnly // only the application's code needs to be checked
	)

	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))

	// Check the code quality
	.pipe($.tslint())

	// Fail the build only if BrowserSync is not active
	.pipe($.if(!browserSync.active, $.tslint.report('prose')))
	.pipe($.if(browserSync.active, $.tslint.report('prose', {
		emitError: false
	})))

	// Task result
	.pipe($.size({
		title: 'ts-lint'
	}));
});
