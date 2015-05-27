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
var packageJsonValidator = require('gulp-nice-package');

// Define global build variables
var distFolder = './dist';
var tempFolder = './.tmp';
var appFolder = './app';
var finalCssBundleFilename = 'bundle.min.css';
var finalVendorCssBundleFilename = 'vendor.min.css';
var finalJsBundleFilename = 'bundle.min.js';
var typings = './ts-typings';
var libraryTypeScriptDefinitions = typings + '/**/*.ts';
var appTypeScriptReferences = typings + '/typescriptApp.d.ts';

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

gulp.task('clean', 'Clean output directories', del.bind(null, [tempFolder, distFolder+'/*', '!' + distFolder + '/.git'], {dot: true}));

gulp.task('validate-package-json', 'Validate the package.json file', function () {
  return gulp.src('package.json')
    .pipe(packageJsonValidator());
});

gulp.task('js-hint', 'Check JavaScript code quality using JSHint', function () {
	return gulp.src([
		appFolder + '/scripts/**/*.js'
	])
	
	// Force BrowserSync reload
    .pipe(reload({stream: true, once: true}))
	
	// Run JSHint
    .pipe($.jshint())
	
	// Generate a stylish report
    .pipe($.jshint.reporter('jshint-stylish'))
	
	// Fail the build only if BrowserSync is not active
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('ts-lint', 'Lint TypeScript code', function () {
    return gulp.src([
		appFolder + '/scripts/**/*.ts'
	])
	.pipe($.tslint())
	
	// Fail the build only if BrowserSync is not active
	.pipe($.if(!browserSync.active, $.tslint.report('prose')))
	.pipe($.if(browserSync.active, $.tslint.report('prose',{
		emitError: false
	})));
});

gulp.task('scripts-javascript', 'Compile JavaScript and generate sourcemaps', function(){
	return gulp.src([
		appFolder + '/scripts/**/*.js'
	])
	
	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))
	
	// speed things up by ignoring unchanged resources
	.pipe($.changed(tempFolder + '/scripts', {extension: '.js'}))
	
	// Initialize sourcemap generation
	.pipe($.sourcemaps.init({
		//debug: true
	}))
	
	// Copy files
    .pipe(gulp.dest(tempFolder + '/scripts'))
	
	// Write sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps
	.pipe($.sourcemaps.write()) // use '.' to write the sourcemap to a separate file in the same dir
	
	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))
	
	// Task result
	.pipe($.size({title: 'scripts-javascript'}))
	
	// Reload Browser if needed
	.pipe($.if(browserSync.active, reload({stream: true, once: true})));
});

gulp.task('scripts-typescript', 'Compile TypeScript, include references to library and app .d.ts files and generate sourcemaps', function() {
	var sourceTsFiles = [
		appFolder + '/scripts/**/*.ts',
		libraryTypeScriptDefinitions, // reference to library .d.ts files
		appTypeScriptReferences // reference to app.d.ts files
	];
	
	var tsResult = gulp.src(sourceTsFiles)
		.pipe($.sourcemaps.init())
		.pipe($.typescript({
			target: 'ES5',
			declarationFiles: false,
			noExternalResolve: true
	}));
	
	// Output files
	tsResult.dts.pipe(gulp.dest(tempFolder +'/scripts'));
	
	return tsResult.js
		.pipe($.sourcemaps.write('.',{
			includeContent: false,
			sourceRoot: '../'
		}))
		.pipe(gulp.dest(tempFolder +'/scripts'))
		
		// Task result
		.pipe($.size({title: 'scripts-typescript'})
		
		// Reload Browser if needed
		.pipe($.if(browserSync.active, reload({stream: true, once: true})))
		
	);
});

gulp.task('gen-ts-refs', 'Generate the app.d.ts references file dynamically from all application *.ts files', function () {
    var sources = gulp.src([
		appFolder + '/scripts/**/*.ts'],
		{read: false}
	);
	//.pipe($.debug({title: 'Stream contents:', minimal: true}));
	
    return gulp.src(appTypeScriptReferences)
		.pipe($.inject(sources, {
			starttag: '//{',
			endtag: '//}',
			transform: function (filepath) {
				return '/// <reference path="..' + filepath + '" />';
			}
		}))
		//.pipe($.debug({title: 'Stream contents:', minimal: true}))
		.pipe(gulp.dest(typings));
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
	return gulp.src([
		appFolder + '/images/**/*'
	])
	
	// Minify and cache
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
	
	// Output files
    .pipe(gulp.dest(distFolder +'/images'))
	
	// Task result
    .pipe($.size({title: 'images'}));
});

gulp.task('fonts', 'Copy fonts for production', function () {
	return gulp.src([
		appFolder + '/fonts/**'
	])
  
	// Copy files
    .pipe(gulp.dest(distFolder + '/fonts'))
	
	// Task result
    .pipe($.size({title: 'fonts'}));
});

gulp.task('copyNpmDependencies', 'Copy NPM dependencies to the temp build folder (useful for scripts and stylesheets during development)', function() {
	return gulp.src(
		gulpNpmFiles(), {base:'./'}
	)
  
	// Only take changed files into account
	.pipe($.changed(tempFolder, {}))
  
	// Copy files
	.pipe(gulp.dest(tempFolder))
  
	// Task result
	.pipe($.size({title: 'copyNpmDependencies'}));
});

gulp.task('styles', 'Compile, add vendor prefixes and generate sourcemaps', function () {
	return gulp.src([
		appFolder + '/styles/**/*.{scss,css}' // the sass plugin now correctly ignores sass partials
	])
	
	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))
	
	// speed things up by ignoring unchanged resources
	//.pipe($.changed(tempFolder + '/styles', {extension: '.css'}))
	
	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))
	
	// Process Sass files
    .pipe($.sass({
		precision: 10,
		sourcemap: true
		//errLogToConsole: true
	}).on('error', $.sass.logError))
	

	// Initialize sourcemap generation
	.pipe($.sourcemaps.init({
		loadMaps: true
		//debug: true
	}))
	
	// workaround for a sourcemap generation issue: https://github.com/sindresorhus/gulp-autoprefixer/issues/10
	/*
	.pipe($.minifyCss(
		minifyCssOptions
	))
	*/
	
	// Include vendor prefixes
   .pipe($.autoprefixer({
		browsers: AUTOPREFIXER_BROWSERS
	}))
	// alternative: $.autoprefixer('last 2 version')
	
	// Write sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps
	.pipe($.sourcemaps.write()) // use '.' to write the sourcemap to a separate file in the same dir
	
	// Display the files in the stream
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))
	
	// Output files
    .pipe(gulp.dest(tempFolder + '/styles'))
	
	// Reload Browser if needed
	.pipe($.if(browserSync.active, reload({stream: true, once: true})))
	
	// Task result
    .pipe($.size({title: 'styles'}));
});

gulp.task('styles-vendor:dist', 'Optimize and minimize vendor stylesheets for production', function() {

	return gulp.src([
		appFolder + '/styles/vendor.{scss,css}'
	])
	
	// Process Sass files
    .pipe($.sass({
		precision: 10
		//errLogToConsole: true
	}).on('error', $.sass.logError))
	
	// Replace CSS imports by actual contents
	.pipe($.cssimport())
	
	// Remove any unused CSS
	// Breaks the sourcemaps
    //.pipe($.uncss({
    //  html: [
    //    appFolder + '/**/*.html'
    //  ],
    //  // CSS Selectors for UnCSS to ignore
    //  ignore: [
    //  ]
    //}))
	
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))
	
	// Regroup all files together
	.pipe($.concat(finalVendorCssBundleFilename))
	
	// Optimize and minimize
	.pipe($.csso()) // https://www.npmjs.com/package/gulp-csso
	.pipe($.minifyCss(
		minifyCssOptions
	))
	
	// Output file
	.pipe(gulp.dest(distFolder + '/styles'))
	
	// Task result
    .pipe($.size({title: 'styles-vendor-dist'}));
});

gulp.task('styles:dist', 'Optimize and minimize stylesheets for production', function(){

	return gulp.src([
		appFolder + '/styles/**/*.{scss,css}',
		'!' + appFolder + '/styles/vendor.{scss,css}'
	])
	
	// Process Sass files
    .pipe($.sass({
		errLogToConsole: true
	}))
	
	// Replace CSS imports by actual contents
	.pipe($.cssimport())
	
	// Remove any unused CSS
	// Breaks the sourcemaps
    //.pipe($.uncss({
    //  html: [
    //    appFolder + '/**/*.html'
    //  ],
    //  // CSS Selectors for UnCSS to ignore
    //  ignore: [
    //  ]
    //}))
	
	//.pipe($.debug({title: 'Stream contents:', minimal: true}))
	
	// Regroup all files together
	.pipe($.concat(finalCssBundleFilename))
	
	// Optimize and minimize
	.pipe($.csso()) // https://www.npmjs.com/package/gulp-csso
	.pipe($.minifyCss(
		minifyCssOptions
	))
	
	// Output file
	.pipe(gulp.dest(distFolder + '/styles'))
	
	// Task result
    .pipe($.size({title: 'styles-dist'}));
});

gulp.task('html', 'Optimize HTML and assets', function () {
	var assets = $.useref.assets({
		searchPath: '{' + tempFolder + ',' + appFolder + '}'
	});

	return gulp.src([
		appFolder + '/**/*.html'
	])
	
    .pipe(assets)
    
	.pipe($.if('*.js', $.stripDebug())) // remove console/debug statements
	.pipe($.if('*.js', $.uglify({
		preserveComments: 'some'
	}))) // keep comments that have a '!': https://github.com/gruntjs/grunt-contrib-uglify#preservecomments
	
	.pipe(assets.restore())
    .pipe($.useref())
	
	//.pipe($.replace('scripts/main.js', 'scripts/'+finalJsBundleFilename))
    
	// Minify HTML
    .pipe($.if('*.html', $.minifyHtml()))
    
	// Output files
    .pipe(gulp.dest(distFolder))
	
	// Task result
    .pipe($.size({title: 'html'}));
});

gulp.task('copy', 'Copy all files except HTML/CSS/JS which are processed separately', function () {
  return gulp.src([
    appFolder + '/*',
    '!' + appFolder + '/*.html',
	'!' + appFolder + '/styles/*',
	'!' + appFolder + '/scripts/*',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  })
  
  // Copy
  .pipe(gulp.dest(distFolder))
  
  // Task result
  .pipe($.size({title: 'copy'}));
});

gulp.task('serve', 'Watch files for changes and rebuild/reload automagically', ['ts-lint', 'gen-ts-refs', 'js-hint', 'scripts-javascript', 'scripts-typescript', 'styles', 'copyNpmDependencies'], function () {
	browserSync({ // http://www.browsersync.io/docs/options/
		notify: false,
		// Customize the BrowserSync console logging prefix
		logPrefix: 'MDL',
		// Run as an https by uncommenting 'https: true'
		// Note: this uses an unsigned certificate which on first access
		//       will present a certificate warning in the browser.
		// https: true,
		server: [tempFolder, appFolder],
		ghostMode: { // replicate actions in all clients
			clicks: false,
			forms: false,
			scroll: false
		}
	});

	gulp.watch([appFolder + '/**/*.html'], reload); // html changes will force a reload
	gulp.watch([appFolder + '/styles/**/*.{scss,css}'], ['styles']); // stylesheet changes will force a reload
	gulp.watch([appFolder + '/scripts/**/*.ts'], ['ts-lint','scripts-typescript', 'gen-ts-refs']); // TypeScript changes will force a reload
	gulp.watch([appFolder + '/scripts/**/*.js'], ['js-hint','scripts-javascript']); // JavaScript changes will force a reload
	gulp.watch([appFolder + '/images/**/*'], reload); // image changes will force a reload
});

gulp.task('serve:dist', 'Build and serve the production version (i.e., \'dist\' folder contents', ['default'], function () {
  browserSync({
    notify: false,
    logPrefix: 'MDL',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: distFolder
  });
});

gulp.task('default', 'Build production files', ['clean', 'ts-lint', 'js-hint', 'gen-ts-refs', 'scripts-typescript', 'scripts-javascript'], function (cb) {
	runSequence('copyNpmDependencies', ['styles-vendor:dist', 'styles:dist', 'html', 'images', 'fonts', 'copy', 'validate-package-json'], cb);
});