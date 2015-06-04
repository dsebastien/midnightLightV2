'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins

var config = require('../config');
var utils = require('../utils');

gulp.task('gen-ts-refs', 'Generate the app.d.ts references file dynamically from all application *.ts files', function () {
	var sources = utils.plumbedSrc(
			config.typescript.srcAppOnly,
			{
				read: false
			}
	);

	//.pipe($.debug({title: 'Stream contents:', minimal: true}));

	return utils.plumbedSrc(config.files.appTypeScriptReferences)
			.pipe($.inject(sources, {
				starttag: '//{',
				endtag: '//}',
				transform: function (filepath) {
					return '/// <reference path="..' + filepath + '" />';
				}
			}))

		//.pipe($.debug({title: 'Stream contents:', minimal: true}))
			.pipe(gulp.dest(config.folders.typings));
});
