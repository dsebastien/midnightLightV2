'use strict';

// Include Gulp & tools we'll use
var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins
import gutil from 'gulp-util';

import config from './config';

// display errors nicely and avoid having errors breaking tasks/watch
// reference: https://github.com/mikaelbr/gulp-notify/issues/81
var reportError = (error) =>{
	var lineNumber = error.lineNumber ? 'LINE ' + error.lineNumber + ' -- ' : '';

	$.notify({
		title: 'Task Failed [' + error.plugin + ']',
		message: lineNumber + 'See console.',
		sound: true

		// the version below probably works on OSX
		//sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
	}).write(error);

	//gutil.beep(); // Beep 'sosumi' again

	// Inspect the error object
	//gutil.log(error);

	// Easy error reporting
	//console.log(error.toString());

	// Pretty error reporting
	var report = '';
	var chalk = gutil.colors.white.bgRed;

	report += chalk('TASK:') + ' [' + error.plugin + ']\n';
	report += chalk('ISSUE:') + ' ' + error.message + '\n';

	if(error.lineNumber){
		report += chalk('LINE:') + ' ' + error.lineNumber + '\n';
	}

	if(error.fileName){
		report += chalk('FILE:') + ' ' + error.fileName + '\n';
	}

	console.error(report);

	if(config.exitOnError){
		process.exit(1);
	} else{
		// Prevent the 'watch' task from stopping
		this.emit('end');
	}
};

// easily integrate plumber invocation
// reference: https://gist.github.com/floatdrop/8269868
var plumbedSrc = function(){
	return gulp.src.apply(gulp, arguments)
			.pipe($.plumber({
				errorHandler: reportError
			}));
};

// utility function to exclude files from globs
var not = '!';
var exclude = function(providedPath){
	return not + providedPath;
};

module.exports = {
	exclude,
	reportError,
	plumbedSrc
};
