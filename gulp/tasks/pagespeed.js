'use strict';

var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var pagespeed = require('psi');

var config = require('../config');
var packageJSON = require('../../'+config.files.packageJSON);

gulp.task('pagespeed', 'Run PageSpeed Insights', function (cb) {
	// Update the below URL to the public URL of your site
	pagespeed.output(packageJSON.homepage, {
		strategy: 'mobile' // desktop

		// Use the PageSpeed Insights free (no API key) tier.
		// Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
		// key: 'API_KEY'
	}, cb);
});
