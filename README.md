# Midnight Light

## About
Midnight Light is a modern Web front-end for Wordpress.

## Status
yet-to-be-implemented prototype :)

## Installation
In order to use Midnight Light, you need to install the WP REST API plugin in Wordpress:
* official website: http://wp-api.org/
* wordpress plugins directory: https://wordpress.org/plugins/json-rest-api/
* github: https://github.com/WP-API/WP-API
* note that the plugin will most probably be merged into a future Wordpress release (along with the OAuth plugin)

## Building from source
If you want to build from source, you need to:
* install NodeJS:
* clone this git repository
* go to the folder where you've cloned the project
* run `$ npm install --global gulp && npm install` to get started

## Dependencies
* apache-server-configs: base Apache HTTP Server config: https://www.npmjs.com/package/apache-server-configs
* browser-sync: live CSS reload & browser syncing: https://www.npmjs.com/package/browser-sync
* del: delete files/folders: https://www.npmjs.com/package/del
* gulp: build system (https://www.npmjs.com/package/gulp)
* gulp-autoprefixer: automatically add vendor prefixes to CSS: https://www.npmjs.com/package/gulp-autoprefixer
* gulp-cache: temp file based caching proxy task for gulp: https://www.npmjs.com/package/gulp-cache
* gulp-changed: only pass through changed files: https://www.npmjs.com/package/gulp-changed
* gulp-csso: minify CSS with CSS optimizer: https://www.npmjs.com/package/gulp-csso
* gulp-flatten: remove or replace relative path for files: https://www.npmjs.com/package/gulp-flatten
* gulp-if: conditionally run a task: https://www.npmjs.com/package/gulp-if
* gulp-imagemin: minify png, jpeg, gif and svg images: https://www.npmjs.com/package/gulp-imagemin
* gulp-jshint: JSHint plugin for gulp: https://www.npmjs.com/package/gulp-jshint
* gulp-load-plugins: automatically load any gulp plugins defined in package.json: https://www.npmjs.com/package/gulp-load-plugins
* gulp-minify-html: minify html with minimize: https://www.npmjs.com/package/gulp-minify-html
* gulp-replace: string replace plugin for gulp: https://www.npmjs.com/package/gulp-replace
* gulp-gulp-less-sourcemap: less for gulp with source map generation support: https://www.npmjs.com/package/gulp-less-sourcemap
* gulp-size: display the size of the project: https://www.npmjs.com/package/gulp-size
* gulp-sourcemaps: js source map support for gulp: https://www.npmjs.com/package/gulp-sourcemaps
* gulp-uglify: minify files using Uglify JS: https://www.npmjs.com/package/gulp-uglify
* gulp-uncss: remove unused CSS selectors: https://www.npmjs.com/package/gulp-uncss
* gulp-useref: parse 'build' blocks in HTML files to replace references to non-optimized scripts/stylesheets: https://www.npmjs.com/package/gulp-useref
* jshint-stylish: stylish reporter for JSHint: https://www.npmjs.com/package/jshint-stylish
* opn: opens stuff like websites, files, executables (cross-platform): https://www.npmjs.com/package/opn
* psi: PageSpeed insights with reporting: https://www.npmjs.com/package/psi
* require-dir: helper to require() directories: https://www.npmjs.com/package/require-dir
* run-sequence: run a series of dependent gulp tasks in order: https://www.npmjs.com/package/run-sequence
* bootstrap: bootstrap css framework: https://www.npmjs.com/package/bootstrap
* purecss: purecss: https://www.npmjs.com/package/purecss

## Authors
### Sebastien Dubois
* [@Blog](http://www.dsebastien.net)
* [@Twitter](http://twitter.com/dSebastien)
* [@GitHub](http://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](http://en.wikipedia.org/wiki/MIT_License).