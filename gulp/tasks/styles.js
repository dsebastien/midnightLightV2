'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins
var browserSync = require('browser-sync');

var config = require('../config');
var utils = require('../utils');

gulp.task('styles', 'Compile, add vendor prefixes and generate sourcemaps', function () {
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

		// Writing the sourcemaps without content & re-initializing is necessary to work around an annoying issue: https://github.com/sindresorhus/gulp-autoprefixer/issues/8

		// Write sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps
			.pipe($.sourcemaps.write({ // use '.' to write the sourcemap to a separate file in the same dir
				includeContent: false,
				sourceRoot: '.'
			}))

		// Initialize sourcemap generation
			.pipe($.sourcemaps.init({
				//debug: true
				loadMaps: true // we reload the maps we've just created
			}))

		// Include vendor prefixes
			.pipe($.autoprefixer({
				browsers: config.autoprefixerBrowsers
			}))

		// alternative: $.autoprefixer('last 2 version')

		// Write sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps
			.pipe($.sourcemaps.write({ // use '.' to write the sourcemap to a separate file in the same dir
				includeContent: false,
				sourceRoot: '.'
			}))

		// Output files
			.pipe(gulp.dest(config.styles.dest))

		// Reload Browser if needed
		// Stream if possible
			.pipe($.if(browserSync.active, browserSync.reload({
				stream: true, once: true
			})))

		// Task result
			.pipe($.size({
				title: 'styles'
			}));
});
