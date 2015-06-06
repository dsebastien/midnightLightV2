'use strict';

var utils = require('./utils');

var extensions = {
	javascript : '.js',
	typescript : '.ts',
	css        : '.css',
	sass       : '.scss',
	html       : '*.html'
};

var folders = {
	dist    : './dist',
	temp    : './.tmp',
	app     : './app',
	typings : './ts-typings'
};

var webServerFolders = {
	dev  : [
	folders.temp,
	folders.app
	],
	dist : [
	folders.dist
	]
};

var globs = {
	any     : '/*',
	scripts : {
		javascript : '/**/*' + extensions.javascript,
		typescript : '/**/*' + extensions.typescript
	},
	styles  : {
		css    : '/**/*' + extensions.css,
		sass   : '/**/*' + extensions.sass,
		vendor : '/styles/vendor{' + extensions.sass + ',' + extensions.css + '}'
	},
	images  : '/images/**/*',
	fonts   : '/fonts/**/*',
	html    : '/**/*.html'
};

var files = {
	any                          : '*',
	packageJSON                  : 'package.json',
	appTypeScriptReferences      : folders.typings + '/typescriptApp.d.ts',
	libraryTypeScriptDefinitions : folders.typings + globs.scripts.typescript,
	htaccess                     : 'node_modules/apache-server-configs/dist/.htaccess'
};

var exitOnError = false; // whether we should make the house explode whenever errors occur (e.g., stop gulp serve)

var javascript = {
	src  : [
	folders.app + globs.scripts.javascript
	],
	dest : folders.temp
};

var typescript = {
	src        : [
	folders.app + globs.scripts.typescript,
		files.libraryTypeScriptDefinitions, // reference to library .d.ts files
		files.appTypeScriptReferences // reference to app.d.ts files
		],
	srcAppOnly : [
	folders.app + globs.scripts.typescript
	],
	dest       : folders.temp
};

var styles = {
	src                          : [
	folders.app + globs.styles.css,
	folders.app + globs.styles.sass
	],
	srcVendorOnly                : [
	folders.app + globs.styles.vendor
	],
	srcWithoutVendor             : [
	folders.app + globs.styles.css,
	folders.app + globs.styles.sass,
	utils.exclude(folders.app + globs.styles.vendor)
	],
	dest                         : folders.temp, // during DEV
	destDist                     : folders.dist + '/styles', // for PROD
	finalCssBundleFilename       : 'bundle.min.css',
	finalVendorCssBundleFilename : 'vendor.min.css'
};

var images = {
	src  : [
	folders.app + globs.images
	],
	dest : folders.dist + '/images'
};

var fonts = {
	src  : [
	folders.app + globs.fonts
	],
	dest : folders.dist + '/fonts'
};

var html = {
	src  : [
	folders.app + globs.html
	],
	dest : folders.dist
};

var copy = {
	src  : [
	folders.app + globs.any,
	utils.exclude(folders.app + globs.html),
	utils.exclude(folders.app + globs.styles.css),
	utils.exclude(folders.app + globs.styles.sass),
	utils.exclude(folders.app + globs.scripts.javascript),
	utils.exclude(folders.app + globs.scripts.typescript),
	files.htaccess
	],
	dest : folders.dist
};

var autoprefixerBrowsers = [
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

var minifyCss = { // https://www.npmjs.com/package/gulp-minify-g
	keepBreaks          : false, // no problem here
	keepSpecialComments : true, // necessary for licensing
	compatibility       : false, // no problem here
	aggressiveMerging   : false // necessary because it breaks PureCSS
};

module.exports = {
	extensions           : extensions,
	folders              : folders,
	globs                : globs,
	files                : files,
	exitOnError          : exitOnError,
	javascript           : javascript,
	typescript           : typescript,
	styles               : styles,
	images               : images,
	fonts                : fonts,
	html                 : html,
	copy                 : copy,
	autoprefixerBrowsers : autoprefixerBrowsers,
	minifyCss            : minifyCss,
	webServerFolders     : webServerFolders
};
