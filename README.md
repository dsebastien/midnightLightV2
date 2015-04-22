# Midnight Light

## About
Midnight Light is a modern personal Web front-end.
The goal of this project is to create a modern, responsive, mobile-first, offline-first and (hopefully) good looking web front-end. Why? Because we can, today! :)

For more background head over to my blog:
* http://www.dsebastien.net/2015/04/22/web-3-0-is-closer-than-you-might-think/
* http://www.dsebastien.net/2015/04/14/time-for-some-web-dev/

## Status
yet-to-be-implemented prototype :)

## Features
None so far

## Roadmap
Check out TODO.md

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
* run `$ npm install --global gulp && npm install` to get the dependencies
* run `$ gulp` to build the app
* take a look at COMMANDS.md in the project for more commands you can use

## Developping/Running on Docker
If you're familiar with Docker then you can easily run the development or production version of this application in a Docker container.
* install Docker (or Boot2Docker if you're on Windows)
* for the production version, run ./runOnDocker.sh
* for the development version, run ./ronDevOnDocker.sh

## Dependencies
* apache-server-configs: base Apache HTTP Server config (allows/configures CORS, adds the X-UA-Compatible header, defines all media types correctly such as SVG, ...): https://www.npmjs.com/package/apache-server-configs
* browser-sync: live CSS reload & browser syncing: https://www.npmjs.com/package/browser-sync
* del: deletes files/folders: https://www.npmjs.com/package/del
* gulp: build system (https://www.npmjs.com/package/gulp)
* gulp-autoprefixer: automatically adds vendor prefixes to CSS: https://www.npmjs.com/package/gulp-autoprefixer
* gulp-cache: temp file based caching proxy task for gulp: https://www.npmjs.com/package/gulp-cache
* gulp-changed: only pass through changed files: https://www.npmjs.com/package/gulp-changed
* gulp-csso: minify CSS with CSS optimizer: https://www.npmjs.com/package/gulp-csso
* gulp-flatten: remove or replace relative path for files: https://www.npmjs.com/package/gulp-flatten
* gulp-if: conditionally run a task: https://www.npmjs.com/package/gulp-if
* gulp-imagemin: minify png, jpeg, gif and svg images: https://www.npmjs.com/package/gulp-imagemin
* gulp-jshint: JSHint plugin for gulp: https://www.npmjs.com/package/gulp-jshint
* gulp-load-plugins: automatically load any gulp plugins defined in package.json: https://www.npmjs.com/package/gulp-load-plugins
* gulp-minify-html: minify html with minimize: https://www.npmjs.com/package/gulp-minify-html
* gulp-minify-css: minify css with clean-css: https://www.npmjs.com/package/gulp-minify-css
* gulp-replace: string replace plugin for gulp: https://www.npmjs.com/package/gulp-replace
* gulp-less: less plugin for gulp: https://www.npmjs.com/package/gulp
* gulp-sass: sass plugin for gulp (since I haven't decided yet which one I prefer): https://www.npmjs.com/package/sass
* node-sass: used by gulp-sass and normally not needed but added to fix an issue with sourcemaps: https://github.com/sindresorhus/gulp-autoprefixer/issues/10
* gulp-size: display the size of the project: https://www.npmjs.com/package/gulp-size
* gulp-sourcemaps: js source map support for gulp: https://www.npmjs.com/package/gulp-sourcemaps
* gulp-uglify: minify files using Uglify JS: https://www.npmjs.com/package/gulp-uglify
* gulp-uncss: remove unused CSS selectors: https://www.npmjs.com/package/gulp-uncss
* gulp-useref: parses 'build' blocks in HTML files to replace references to non-optimized scripts/stylesheets: https://www.npmjs.com/package/gulp-useref
* gulp-npm-files: list package.json dependencies so that we can process them (e.g., copy them to the dist folder): https://www.npmjs.com/package/gulp-npm-files
* gulp-help: create a list of gulp tasks with documentation: https://www.npmjs.com/package/gulp-help/
* gulp-strip-debug: remove console and debugger statements from JS code: https://www.npmjs.com/package/gulp-strip-debug
* gulp-concat: concatenate files: https://www.npmjs.com/package/gulp-concat
* gulp-rename: rename files: https://www.npmjs.com/package/gulp-rename
* gulp-using: useful to verify what the build patterns catch: https://www.npmjs.com/package/gulp-using
* gulp-cssimport: replace CSS imports by stylesheet contents: https://www.npmjs.com/package/gulp-cssimport
* gulp-nice-package: validate npm's package.json file: https://www.npmjs.com/package/gulp-nice-package/
* jshint-stylish: stylish reporter for JSHint: https://www.npmjs.com/package/jshint-stylish
* opn: open stuff like websites, files, executables (cross-platform): https://www.npmjs.com/package/opn
* psi: PageSpeed insights with reporting: https://www.npmjs.com/package/psi
* require-dir: helper to require() directories: https://www.npmjs.com/package/require-dir
* run-sequence: run a series of dependent gulp tasks in order: https://www.npmjs.com/package/run-sequence
* purecss: purecss: https://www.npmjs.com/package/purecss

## Authors
### Sebastien Dubois
* [@Blog](http://www.dsebastien.net)
* [@Twitter](http://twitter.com/dSebastien)
* [@GitHub](http://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](http://en.wikipedia.org/wiki/MIT_License).