# Midnight Light

[![Build Status](https://secure.travis-ci.org/dsebastien/midnightLightV2.png?branch=master)](https://travis-ci.org/dsebastien/midnightLightV2)
[![Coverage Status](https://img.shields.io/coveralls/dsebastien/midnightLightV2.svg?style=flat)](https://coveralls.io/r/dsebastien/midnightLightV2?branch=master)
[![Dependency Status](https://david-dm.org/dsebastien/midnightLightV2.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/midnightLightV2)
[![devDependency Status](https://david-dm.org/dsebastien/midnightLightV2/dev-status.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/midnightLightV2#info=devDependencies)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-green.svg?style=flat)](https://gitter.im/dsebastien/midnightLightV2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## About
Midnight Light is a modern personal Web front-end.
The goal of this project is to create a modern, responsive, mobile-first, offline-first and (hopefully) good looking web front-end. Why? Because we can, today! :)

For more background head over to my blog:
* https://www.dsebastien.net/2015/04/22/web-3-0-is-closer-than-you-might-think/
* https://www.dsebastien.net/2015/04/14/time-for-some-web-dev/

## Features
* mobile first and responsive design
* awesome build based on gulp, a ton of automagic stuff
* all the yet-to-be-implemented features :)

## Status & roadmap
Check out the issues & labels to get an idea of what's next.
For existing features, refer to the previous section.

## Installation
In order to use Midnight Light, you need to install the WP REST API plugin in Wordpress:
* official website: http://wp-api.org/
* wordpress plugins directory: https://wordpress.org/plugins/json-rest-api/
* github: https://github.com/WP-API/WP-API
* note that the plugin will most probably be merged into a future Wordpress release (along with the OAuth plugin)

## Building from source
If you want to build from source, you need to:
* install NodeJS & npm
* install the following global packages: `npm install --global gulp babel babel-core tsd jspm --no-optional`
* clone this git repository
* go to the folder where you've cloned the project
* run `$ npm run setup`

The above command will:
* install all dependencies including Angular, ...
* download the TypeScript typings files (for more information, check out the following [link](https://github.com/borisyankov/DefinitelyTyped))

To run the build, just execute `$ gulp`. The result will be stored in the 'dist' folder.

For more details about the available build commands, check out the documentation of [ModernWebDevBuild](https://github.com/dsebastien/modernWebDevBuild) as this project's build is provided by that project.

## Developping/Running on Docker
If you're familiar with Docker then you can easily run the development or production version of this application in a Docker container.
* install Docker (or Boot2Docker if you're on Windows)
* for the production version, run ./runOnDocker.sh
* for the development version, run ./ronDevOnDocker.sh

## Updating the TypeScript definitions
* run `$ npm run tsd-update`. This will update everything in tsd.json to the head version of the DefinitelyTyped repository

## Authors
### Sebastien Dubois
* [@Blog](https://www.dsebastien.net)
* [@Twitter](https://twitter.com/dSebastien)
* [@GitHub](https://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
