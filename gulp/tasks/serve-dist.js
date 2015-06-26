'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback'; // fix for SPAs w/ BrowserSync & others: https://github.com/BrowserSync/browser-sync/issues/204

import config from '../config';

var startBrowserSync = () =>{
	browserSync({
		notify: false,
		//port: 8000,

		// Customize the BrowserSync console logging prefix
		logPrefix: 'MDL',

		// Run as an https by uncommenting 'https: true'
		// Note: this uses an unsigned certificate which on first access
		// will present a certificate warning in the browser.
		// https: true,
		server: {
			baseDir: config.webServerFolders.dist,

			// fix for SPAs w/ BrowserSync & others: https://github.com/BrowserSync/browser-sync/issues/204
			// reference: https://github.com/BrowserSync/browser-sync/issues/204
			middleware: [ historyApiFallback() ]
		}
	});
};

gulp.task('serve-dist', 'Build and serve the production version (i.e., \'dist\' folder contents', () =>{
	return runSequence(['default'], startBrowserSync); // here we need to ensure that all the other tasks are done before we start BrowserSync
});
