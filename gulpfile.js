/*
 Rather than manage one giant configuration file responsible
 for creating multiple tasks, each task has been broken out into
 its own file in gulp/tasks. Any files in that directory get
 automatically required below.

 To add a new task, simply add a new task file that directory.
 gulp/tasks/default.js specifies the default set of tasks to run
 when you run `gulp`.

 Principle taken from gulp-starter: https://github.com/greypants/gulp-starter
 */

'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

// Load all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

// Default task
gulp.task('default', 'Build production files', [ 'prepare-default' ], function (callback) {
	return runSequence('copy-npm-dependencies', [
		'styles-vendor-dist',
		'styles-dist',
		'html',
		'images',
		'fonts',
		'copy',
		'validate-package-json'
	], callback);
});

gulp.task('prepare-default', 'Do all the necessary preparatory work for the default task', [ 'clean', 'ts-lint', 'check-js-style', 'check-js-quality' ], function () {
	return runSequence([
		'gen-ts-refs',
		'scripts-typescript',
		'scripts-javascript'
	]);
});
