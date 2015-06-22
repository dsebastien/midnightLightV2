'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)

import runSequence from 'run-sequence'; // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
import browserSync from 'browser-sync';

import config from '../config';

var startBrowserSync = () =>{
	browserSync({ // http://www.browsersync.io/docs/options/
		notify: false,
		//port: 8000,

		// Customize the BrowserSync console logging prefix
		logPrefix: 'MDL',

		// Run as an https by uncommenting 'https: true'
		// Note: this uses an unsigned certificate which on first access
		//       will present a certificate warning in the browser.
		// https: true,
		// ghostMode: { // replicate actions in all clients
		//  clicks: false,
		//  forms: false,
		//  scroll: false
		// },
		server: config.webServerFolders.dev
	});

	gulp.watch(config.html.src, browserSync.reload); // html changes will force a reload
	gulp.watch(config.styles.src, [ 'styles' ]); // stylesheet changes will force a reload
	gulp.watch(config.typescript.srcAppOnly, [
		//'ts-lint',
		'scripts-typescript',
		'gen-ts-refs'
	]); // TypeScript changes will force a reload
	gulp.watch(config.javascript.src, [
		'check-js-style',
		'check-js-quality',
		'scripts-javascript'
	]); // JavaScript changes will force a reload
	gulp.watch(config.images.src, browserSync.reload); // image changes will force a reload
};

gulp.task('serve', 'Watch files for changes and rebuild/reload automagically', () =>{
	runSequence('prepare-serve', startBrowserSync); // here we need to ensure that all the other tasks are done before we start BrowserSync
});

gulp.task('prepare-serve', 'Do all the necessary preparatory work for the serve task', [
		//'ts-lint',
		'check-js-style',
		'check-js-quality'
		], (callback) =>{
			return runSequence([
				'gen-ts-refs',
				'scripts-javascript',
				'scripts-typescript',
				'styles',
				'validate-package-json'
			], callback);
		});
