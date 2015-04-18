'use strict';

// Include Gulp & tools we'll use
var gulp = require('gulp-help')(require('gulp')); // note that gulp-help is loaded first: https://www.npmjs.com/package/gulp-help/
var $ = require('gulp-load-plugins')(); // https://www.npmjs.com/package/gulp-load-plugins
var gulpNpmFiles = require('gulp-npm-files');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var reload = browserSync.reload;

// Define global build variables
var finalCssBundleFilename = 'bundle.min.css';

// Misc

var minifyCssOptions = { // https://www.npmjs.com/package/gulp-minify-css
	keepBreaks: false, // no problem here
	keepSpecialComments: true, // necessary for licensing
	compatibility: false, // no problem here
	aggressiveMerging: false  // necessary because it breaks PureCSS
};

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('clean', 'Clean output directories', del.bind(null, ['.tmp', 'dist/*', '!dist/.git'], {dot: true}));

gulp.task('jshint', 'Check JavaScript code quality using JSHint', function () {
  return gulp.src('app/scripts/**/*.js')
	
	// Force BrowserSync reload
    .pipe(reload({stream: true, once: true}))
	
	// Run JSHint
    .pipe($.jshint())
	
	// Generate a stylish report
    .pipe($.jshint.reporter('jshint-stylish'))
	
	// Fail the build only if BrowserSync is not active
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('pagespeed', 'Run PageSpeed Insights', function (cb) {
	// Update the below URL to the public URL of your site
	pagespeed.output('http://www.dsebastien.net', {
		strategy: 'mobile',
		// Use the PageSpeed Insights free (no API key) tier.
		// Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
		// key: 'API_KEY'
	}, cb);
});

gulp.task('images', 'Optimize images', function () {
  return gulp.src('app/images/**/*')
	
	// Minify and cache
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
	
	// Output files
    .pipe(gulp.dest('dist/images'))
	
	// Task result
    .pipe($.size({title: 'images'}));
});

gulp.task('fonts', 'Copy fonts for production', function () {
  return gulp.src(['app/fonts/**'])
  
	// Copy files
    .pipe(gulp.dest('dist/fonts'))
	
	// Task result
    .pipe($.size({title: 'fonts'}));
});

gulp.task('copyNpmDependencies', 'Copy NPM dependencies to the temp build folder (useful for scripts and stylesheets during development)', function() {
	return gulp.src(
		gulpNpmFiles(), {base:'./'}
	)
  
	// Only take changed files into account
	.pipe($.changed('./.tmp', {}))
  
	// Copy files
	.pipe(gulp.dest('./.tmp'))
  
	// Task result
	.pipe($.size({title: 'copyNpmDependencies'}));
});

gulp.task('styles', 'Compile, add vendor prefixes and generate sourcemaps', function () {
	return gulp.src([
		'app/styles/**/*.{scss,css}'
	])
	
	// Initialize sourcemap generation
	.pipe($.sourcemaps.init({
		//debug: true
	}))
	
	// Process Sass files
    .pipe($.sass({
		errLogToConsole: true
	}))
	
	// workaround for a sourcemap generation issue: https://github.com/sindresorhus/gulp-autoprefixer/issues/10
	.pipe($.minifyCss(
		minifyCssOptions
	))
	
	// Include vendor prefixes
    .pipe($.autoprefixer({
		browsers: AUTOPREFIXER_BROWSERS
	}))
	
	// alternative: $.autoprefixer('last 2 version')
	
	// Write sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps
	.pipe($.sourcemaps.write()) // use '.' to write the sourcemap to a separate file in the same dir
	
	// Display the files that will be copied
	//.pipe($.using())
	
	// Output files
    .pipe(gulp.dest('.tmp/styles'))
	
	// Reload Browser if needed
	.pipe($.if(browserSync.active, reload({stream: true, once: true})))
	
	// Task result
    .pipe($.size({title: 'styles'}));
});

gulp.task('styles:dist', 'Optimize and minimize stylesheets for production', function(){

	return gulp.src([
		'app/styles/**/*.{scss,css}'
	])
	
	// Process Sass files
    .pipe($.sass({
		errLogToConsole: true
	}))
	
	// Replace CSS imports by actual contents
	.pipe($.cssimport())
	
	// Remove any unused CSS
    .pipe($.uncss({
      html: [
        'app/**/*.html'
      ],
      // CSS Selectors for UnCSS to ignore
      ignore: [
      ]
    }))
	
	// Regroup all files together
	.pipe($.concat(finalCssBundleFilename))
	
	// Optimize and minimize
	.pipe($.csso()) // https://www.npmjs.com/package/gulp-csso
	.pipe($.minifyCss(
		minifyCssOptions
	))
	
	// Output file
	.pipe(gulp.dest('dist/styles'))
	
	// Task result
    .pipe($.size({title: 'styles-dist'}));
});

gulp.task('html', 'Scan HTML for assets (css, js, ..) and optimize them', function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});

  return gulp.src('app/**/*.html')
    .pipe(assets)
    // Concatenate and minify JavaScript
	.pipe($.if('*.js', $.stripDebug())) // remove console/debug statements
	.pipe($.if('*.js', $.uglify({
		preserveComments: 'some'
	}))) // keep comments that have a '!': https://github.com/gruntjs/grunt-contrib-uglify#preservecomments
    .pipe(assets.restore())
    .pipe($.useref())
	
	//.pipe($.replace('styles/main.css', 'styles/main.min.css'))
    
	// Minify HTML
    .pipe($.if('*.html', $.minifyHtml()))
    
	// Output files
    .pipe(gulp.dest('dist'))
	
	// Task result
    .pipe($.size({title: 'html'}));
});

gulp.task('copy', 'Copy all files except HTML/CSS/JS which are processed separately', function () {
  return gulp.src([
    'app/*',
    '!app/*.html',
	'!app/styles/*',
	'!app/scripts/*',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  })
  
  // Copy
  .pipe(gulp.dest('dist'))
  
  // Task result
  .pipe($.size({title: 'copy'}));
});

gulp.task('serve', 'Watch files for changes and rebuild/reload automagically', ['styles', 'copyNpmDependencies'], function () {
	browserSync({ // http://www.browsersync.io/docs/options/
		notify: false,
		// Customize the BrowserSync console logging prefix
		logPrefix: 'MDL',
		// Run as an https by uncommenting 'https: true'
		// Note: this uses an unsigned certificate which on first access
		//       will present a certificate warning in the browser.
		// https: true,
		server: ['.tmp', 'app'],
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false
		}
	});

	gulp.watch(['app/**/*.html'], reload); // html changes will force a reload
	gulp.watch(['app/styles/**/*.{scss,css}'], ['styles']); // stylesheet changes will force a reload
	gulp.watch(['app/scripts/**/*.js'], ['jshint']); // jshint will force a reload
	gulp.watch(['app/images/**/*'], reload); // image changes will force a reload
});

gulp.task('serve:dist', 'Build and serve the production version (i.e., \'dist\' folder contents', ['default'], function () {
  browserSync({
    notify: false,
    logPrefix: 'MDL',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: 'dist'
  });
});

gulp.task('default', 'Build production files', ['clean'], function (cb) {
	runSequence('styles:dist', 'copyNpmDependencies', ['jshint', 'html', 'images', 'fonts', 'copy'], cb);
});