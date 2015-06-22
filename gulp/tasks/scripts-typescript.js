'use strict';

import gulp from 'gulp';
import help from 'gulp-help';
help(gulp); // provide help through 'gulp help' -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import sourcemaps from 'gulp-sourcemaps';
import typescript from 'gulp-typescript';
import browserSync from 'browser-sync';
import iff from 'gulp-if';
import size from 'gulp-size';

import config from '../config';
import utils from '../utils';

gulp.task('scripts-typescript', 'Transpile TypeScript to ES5, include references to library and app .d.ts files and generate sourcemaps', () =>{
	var tsResult = utils.plumbedSrc(config.typescript.src) // handle errors nicely (i.e., without breaking watch)
		.pipe(sourcemaps.init())
		.pipe(typescript({
			// references:
			// https://www.npmjs.com/package/gulp-typescript
			// http://json.schemastore.org/tsconfig
			// https://github.com/Microsoft/TypeScript/wiki/Compiler%20Options
			typescript: require('typescript'), // override the typescript version by that defined in package.json
			target: 'ES5',
			//module: 'system', // use the system module format. Useful since load these with SystemJS
			module: 'commonjs', // TODO replace w/ system once supported
			declaration: false,
			declarationFiles: false,
			noImplicitAny: false,
			removeComments: true,
			noLib: false,
			emitDecoratorMetadata: true, // decorators are heavily used w/ Angular 2
			noExternalResolve: true,
			noEmitOnError: false, // we want as much as we can even if there are compilation errors
			inlineSourceMap: true,
			inlineSources: false, // no need to put the original contents along the sourcemaps, we have the original sources served in dev
			sortOutput: true, // allows to concat afterwards
			"preserveConstEnums": true
			//isolatedModules: true
		}
	));

	// Output files
	tsResult.dts.pipe(gulp.dest(config.typescript.dest));

	return tsResult.js
		.pipe(sourcemaps.write({ // use '.' to write the sourcemap to a separate file in the same dir
			includeContent: false, // alternative: include the contents and remove sourceRoot. Avoids issues but prevents from editing the sources directly in the browser
			sourceRoot: '/' // use an absolute path because we have scripts in different subpaths
		}))

		// Output files
		.pipe(gulp.dest(config.typescript.dest))

		// Task result
		.pipe(size({
			title: 'scripts-typescript'
		}))

		// Reload Browser if needed
		.pipe(iff(browserSync.active, browserSync.reload({
			stream: true, once: true
		})));
});
