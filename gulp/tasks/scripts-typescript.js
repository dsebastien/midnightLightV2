'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins
import browserSync from 'browser-sync';

import config from '../config';
import utils from '../utils';

gulp.task('scripts-typescript', 'Transpile TypeScript to ES5, include references to library and app .d.ts files and generate sourcemaps', () =>{
	var tsResult = utils.plumbedSrc(config.typescript.src) // handle errors nicely (i.e., without breaking watch)
			.pipe($.sourcemaps.init())
			.pipe($.typescript({
				target: 'ES5',
				declarationFiles: true, // mhh
				noExternalResolve: true
			}));

	// Output files
	tsResult.dts.pipe(gulp.dest(config.typescript.dest));

	return tsResult.js
		.pipe($.sourcemaps.write({ // use '.' to write the sourcemap to a separate file in the same dir
			includeContent: false, // alternative: include the contents and remove sourceRoot. Avoids issues but prevents from editing the sources directly in the browser
			sourceRoot: '/' // use an absolute path because we have scripts in different subpaths
		}))

		// Output files
		.pipe(gulp.dest(config.typescript.dest))

		// Task result
		.pipe($.size({
			title: 'scripts-typescript'
		}))

		// Reload Browser if needed
		.pipe($.if(browserSync.active, browserSync.reload({
			stream: true, once: true
		})));
});
