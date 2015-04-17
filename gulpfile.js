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
	
	// Copy
    .pipe(gulp.dest('dist/images'))
	
	// Task result
    .pipe($.size({title: 'images'}));
});

gulp.task('fonts', 'Copy fonts for production', function () {
  return gulp.src(['app/fonts/**'])
  
	// Copy
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
  
  // Copy
  .pipe(gulp.dest('./.tmp'))
  
  // Task result
  .pipe($.size({title: 'copyNpmDependencies'}));
});



// TO REVIEW:



gulp.task('styles', 'Compile and add vendor prefixes to the stylesheets', function () {
  return gulp.src([
    'app/styles/*.scss',
	'app/styles/*.css'
  ])
	// Prepare source maps
    .pipe($.sourcemaps.init())
	// Only take changed stylesheets into account
    //FIXME.pipe($.changed('.tmp/styles', {extension: '.css'}))
	
	// Process Sass files
    .pipe($.sass({
		precision: 10,
		onError: console.error.bind(console, 'Sass error:')
    }))
	// Include vendor prefixes
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
	// Write source maps
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
	
	// Force BrowserSync reload
    .pipe(reload({stream: true, once: true}))
	
    // Concatenate and minify stylesheets
    .pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest('dist/styles'))
	
	// Task result
    .pipe($.size({title: 'styles'}));
});


gulp.task('serve', 'Watch files for changes and rebuild/reload automagically', ['styles', 'copyNpmDependencies'], function () {
  browserSync({
    notify: false,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'MDL',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'app']
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.{scss,css}'], ['styles']); // styles will force a reload
  gulp.watch(['app/scripts/**/*.js'], ['jshint']); // jshint will force a reload
  gulp.watch(['app/images/**/*'], reload);
});

gulp.task('html', 'Scan HTML for assets (css, js, ..) and optimize them', function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});

  return gulp.src('app/**/*.html')
    .pipe(assets)
    // Concatenate and minify JavaScript
    .pipe($.if('*.js', $.uglify({preserveComments: 'some'}))) // keeps comments that have a '!': https://github.com/gruntjs/grunt-contrib-uglify#preservecomments
    // Remove any unused CSS
    .pipe($.if('*.css', $.uncss({
      html: [
        'app/index.html'
      ],
      // CSS Selectors for UnCSS to ignore
      ignore: [
      ]
    })))
    // Concatenate and minify styles
    // In case you are still using useref build blocks
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    // Replace production paths (minified versions)
    .pipe($.replace('styles/main.css', 'styles/main.min.css'))
    // Minify HTML
    .pipe($.if('*.html', $.minifyHtml()))
    // Output files
    .pipe(gulp.dest('dist'))
	
	// Task result
    .pipe($.size({title: 'html'}));
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

gulp.task('copy', 'Copy all files except HTML which is processed separately', function () {
  return gulp.src([
    'app/*',
    '!app/*.html',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}));
});

gulp.task('default', 'Build production files', ['clean'], function (cb) {
  runSequence('styles', 'copyNpmDependencies', ['jshint', 'html', 'images', 'fonts', 'copy'], cb);
});