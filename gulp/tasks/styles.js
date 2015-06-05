'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins
var browserSync = require('browser-sync');

var config = require('../config');
var utils = require('../utils');

gulp.task('styles', 'Compile, add vendor prefixes and generate sourcemaps', function(){
	return utils.plumbedSrc( // handle errors nicely (i.e., without breaking watch)
			config.styles.src
	)

	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))
	
	// Initialize sourcemap generation
	.pipe($.sourcemaps.init({
		//debug: true
	}))
	
	// Process the sass files
	.pipe($.sass({
		//errLogToConsole: true
	}))
	
	// Write sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps
	.pipe($.sourcemaps.write({ // use '.' to write the sourcemap to a separate file in the same dir
		includeContent : false, // alternative: include the contents and remove sourceRoot. Avoids issues but prevents from editing the sources directly in the browser
		sourceRoot     : './' // use the file's folder as source root
	}))
	
	// Include vendor prefixes
	// The if clause prevents autoprefixer from messing up the sourcemaps (necessary if the maps are put in separate files)
	// reference: https://github.com/sindresorhus/gulp-autoprefixer/issues/8#issuecomment-93817177
	.pipe($.if([config.extensions.css, '!*.map'], $.autoprefixer({
		browsers : config.autoprefixerBrowsers // alternative: $.autoprefixer('last 2 version')
	})))
	
	// Output files
	.pipe(gulp.dest(config.styles.dest))
	
	// Reload Browser if needed
	// Stream if possible
	.pipe($.if(browserSync.active, browserSync.reload({
		stream                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     : true, once : true
	})))
	
	// Task result
	.pipe($.size({
		title : 'styles'
	}));
});
