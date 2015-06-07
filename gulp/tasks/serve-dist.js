'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

import config from '../config';

var startBrowserSync = () =>{
	browserSync({
		notify: false,
		logPrefix: 'MDL',

		// Run as an https by uncommenting 'https: true'
		// Note: this uses an unsigned certificate which on first access
		// will present a certificate warning in the browser.
		// https: true,
		server: config.webServerFolders.dist
	});
};

gulp.task('serve-dist', 'Build and serve the production version (i.e., \'dist\' folder contents', () =>{
	runSequence('default', startBrowserSync); // here we need to ensure that all the other tasks are done before we start BrowserSync
});
