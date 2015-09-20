# Midnight Light

## About
Midnight Light is a modern personal Web front-end.
The goal of this project is to create a modern, responsive, mobile-first, offline-first and (hopefully) good looking web front-end. Why? Because we can, today! :)

For more background head over to my blog:
* https://www.dsebastien.net/2015/04/22/web-3-0-is-closer-than-you-might-think/
* https://www.dsebastien.net/2015/04/14/time-for-some-web-dev/

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
* install NodeJS
* clone this git repository
* go to the folder where you've cloned the project
* run `$ npm run setup`; that will:
** download & install the build tools
** download all dependencies
** download the TypeScript
* run `$ npm install` to download all build dependencies
* run `$ jspm install` to download all the application dependencies
* run `$ npm run tsd` to retrieve TypeScript definitions list (for more information, check out the following [link](https://github.com/borisyankov/DefinitelyTyped)
* run `$ gulp` to build the app (in the dist folder)
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

## Authors
### Sebastien Dubois
* [@Blog](https://www.dsebastien.net)
* [@Twitter](https://twitter.com/dSebastien)
* [@GitHub](https://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
