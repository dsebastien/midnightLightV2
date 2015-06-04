'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

var config = require('../config');

gulp.task('serve', 'Watch files for changes and rebuild/reload automagically', function () {
	runSequence('prepare-serve', startBrowserSync); // here we need to ensure that all the other tasks are done before we start BrowserSync
});

gulp.task('prepare-serve', 'Do all the necessary preparatory work for the serve task', [ 'ts-lint', 'check-js-style', 'check-js-quality' ], function (callback) {
	return runSequence('copy-npm-dependencies',[
		'gen-ts-refs',
		'scripts-javascript',
		'scripts-typescript',
		'styles',
		'validate-package-json'
	], callback);
});

var startBrowserSync = function(){
	browserSync({ // http://www.browsersync.io/docs/options/
		notify: false,

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
	gulp.watch(config.typescript.srcAppOnly, [ 'ts-lint', 'scripts-typescript', 'gen-ts-refs' ]); // TypeScript changes will force a reload
	gulp.watch(config.javascript.src, [ 'check-js-style', 'check-js-quality', 'scripts-javascript' ]); // JavaScript changes will force a reload
	gulp.watch(config.images.src, browserSync.reload); // image changes will force a reload
};
