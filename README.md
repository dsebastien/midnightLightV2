# Midnight Light

## About
Midnight Light is a modern personal Web front-end.
The goal of this project is to create a modern, responsive, mobile-first, offline-first and (hopefully) good looking web front-end. Why? Because we can, today! :)

For more background head over to my blog:
* http://www.dsebastien.net/2015/04/22/web-3-0-is-closer-than-you-might-think/
* http://www.dsebastien.net/2015/04/14/time-for-some-web-dev/

## Status & roadmap
Check out the current [TODO list](TODO.md)

## Features
* mobile first and responsive design
* awesome build based on gulp, a ton of automagic stuff
* all the yet-to-be-implemented features :)

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
* run `$ npm install --global gulp babel` to get the build tools
* run `$ npm install` to download all dependencies
* run `$ npm run tsd` to retrieve TypeScript definitions list (for more information, check out the following [link](https://github.com/borisyankov/DefinitelyTyped)
* run `$ gulp` to build the app
* take a look at COMMANDS.md in the project for more commands you can use

## Running manually
* dev version with BrowserSync: run `$ npm start` or `$ npm run serve`
* prod version: run `$ npm run serve-dist`

## Developping/Running on Docker
If you're familiar with Docker then you can easily run the development or production version of this application in a Docker container.
* install Docker (or Boot2Docker if you're on Windows)
* for the production version, run ./runOnDocker.sh
* for the development version, run ./ronDevOnDocker.sh

## Updating the TypeScript definitions
* run `$ npm run tsd-update`. This will update everything in tsd.json to the head version of the DefinitelyTyped repository

## Build dependencies
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
* gulp-jshint: JavaScript code quality checker plugin for gulp that uses JSHint: https://www.npmjs.com/package/gulp-jshint
* gulp-load-plugins: automatically load any gulp plugins defined in package.json: https://www.npmjs.com/package/gulp-load-plugins
* gulp-minify-html: minify html with minimize: https://www.npmjs.com/package/gulp-minify-html
* gulp-minify-css: minify css with clean-css: https://www.npmjs.com/package/gulp-minify-css
* gulp-replace: string replace plugin for gulp: https://www.npmjs.com/package/gulp-replace
* gulp-sass: sass plugin for gulp: https://www.npmjs.com/package/sass
* node-sass: used by gulp-sass and normally not needed but added to fix an issue with sourcemaps: https://github.com/sindresorhus/gulp-autoprefixer/issues/10
* gulp-size: display the size of the project: https://www.npmjs.com/package/gulp-size
* gulp-sourcemaps: js source map support for gulp: https://www.npmjs.com/package/gulp-sourcemaps
* gulp-uglify: minify files using Uglify JS: https://www.npmjs.com/package/gulp-uglify
* gulp-uncss: remove unused CSS selectors: https://www.npmjs.com/package/gulp-uncss
* gulp-useref: parses 'build' blocks in HTML files to replace references to non-optimized scripts/stylesheets: https://www.npmjs.com/package/gulp-useref
* gulp-util: utility methods for gulp: https://www.npmjs.com/package/gulp-util
* gulp-plumber: prevent pipe breaking caused by errors from gulp plugins: https://www.npmjs.com/package/gulp-plumber
* gulp-notify: display notifications on OSX, Linux and Windows (native). Fallsback to Growl or simply logging: https://www.npmjs.com/package/gulp-notify
* gulp-npm-files: list package.json dependencies so that we can process them (e.g., copy them to the dist folder): https://www.npmjs.com/package/gulp-npm-files
* gulp-help: create a list of gulp tasks with documentation: https://www.npmjs.com/package/gulp-help/
* gulp-strip-debug: remove console and debugger statements from JS code: https://www.npmjs.com/package/gulp-strip-debug
* gulp-concat: concatenate files: https://www.npmjs.com/package/gulp-concat
* gulp-rename: rename files: https://www.npmjs.com/package/gulp-rename
* gulp-debug: useful to verify the stream contents: https://www.npmjs.com/package/gulp-debug
* gulp-cssimport: replace CSS imports by stylesheet contents: https://www.npmjs.com/package/gulp-cssimport
* gulp-nice-package: validate npm's package.json file: https://www.npmjs.com/package/gulp-nice-package/
* gulp-inject: JavaScript, stylesheet and webcomponent injection: https://www.npmjs.com/package/gulp-inject
* gulp-tsd: TSD plugin for gulp: https://www.npmjs.com/package/gulp-tsd
* gulp-tslint: Linter for TypeScript code: https://www.npmjs.com/package/gulp-tslint
* gulp-typescript: TypeScript transpiler plugin for gulp: https://www.npmjs.com/package/gulp-typescript
* gulp-babel: ES6 to ES5 transpiler plugin for gulp: https://www.npmjs.com/package/gulp-babel
* gulp-jscs: JavaScript code style checker plugin for gulp: https://www.npmjs.com/package/gulp-jscs
* gulp-jscs-stylish: Stylish reporter for gulp-jscs: https://www.npmjs.com/package/gulp-jscs-stylish
* tsd: TypeScript Definition manager: https://www.npmjs.com/package/tsd
* jshint-stylish: stylish reporter for JSHint: https://www.npmjs.com/package/jshint-stylish
* opn: open stuff like websites, files, executables (cross-platform): https://www.npmjs.com/package/opn
* psi: PageSpeed insights with reporting: https://www.npmjs.com/package/psi
* require-dir: helper to require() directories: https://www.npmjs.com/package/require-dir
* run-sequence: run a series of dependent gulp tasks in order: https://www.npmjs.com/package/run-sequence
* babel: ES6 to ES5 transpiler; used for the gulp build

## Runtime dependencies
* node-reset-scss: Eric Meyer's CSS reset: https://www.npmjs.com/package/node-reset-scss
* normalize.css: Nicolas Gallagher's Normalize CSS (alternative to CSS resets): https://www.npmjs.com/package/normalize.css
* purecss: CSS framework: https://www.npmjs.com/package/purecss
* jquery
* angular (angular, angular-animate, angular-new-router, angular-loader, angular-mocks)
* lodash: https://www.npmjs.com/package/lodash

## Project configuration files
The project includes multiple configuration files. Here's some information about these:
* .dockerignore: files that are ignored by Docker when creating images
* .editorconfig: helps configure code style for various text editors (more information here: http://editorconfig.org)
* .gitattributes: allows to define git attributes per path (more information here: http://git-scm.com/docs/gitattributes)
* .gitignore: configures files/folders that are ignored by git
* .jscsrc: configuration file for JSCS. It defines the JS code style (more information: http://jscs.info/overview.html#options)
  * note that it is configured to use ES Next
  * rules reference: http://jscs.info/rules.html
  * news: https://github.com/jscs-dev/node-jscs/blob/master/CHANGELOG.md
* .jshintrc: JSHint configuration
  * rules reference: http://jshint.com/docs/options
  * more information: http://jshint.com/docs/)
* bower.json and .bowerrc: bower's configuration file (just in case bower is later used to manage the project's dependencies). For now I'm using NPM and am satisfied with it (more information: http://bower.io/)
* Dockerfile and DockerfileDev: Docker configuration files used to describe how Docker images should be created for this project (more information: https://www.docker.com/ and http://docs.docker.com/reference/builder/)
* gulpfile.js: gulp's configuration file. This is where the build magic happens (more information: http://gulpjs.com/)
* package.Json: NPM's configuration file. This is where all dependencies are defined: project ones under 'dependencies' and build-related ones under 'devDependencies' (more information: https://docs.npmjs.com/files/package.json)
* runOnDocker.sh and runDevOnDocker.sh: build scripts that create/run Docker images
* travis.yml: Travis CI configuration files (more information: http://docs.travis-ci.com/user/build-configuration/)
* tsd.json: TypeScript's DefinitelyTyped (tsd) definitions configuration (more information: https://github.com/DefinitelyTyped/tsd)
* tslint.json: TypeScript code style configuration (more information: https://www.npmjs.com/package/tslint)

## Authors
### Sebastien Dubois
* [@Blog](http://www.dsebastien.net)
* [@Twitter](http://twitter.com/dSebastien)
* [@GitHub](http://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
