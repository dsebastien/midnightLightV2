* use const/let (incl in Configuration class)
* add service worker generation: https://github.com/google/web-starter-kit/blob/master/gulpfile.js
* create local storage service
  * load data once & cache / retrieve from cache rather than from network
* create a page component
  * pass it a page to render (model): http://victorsavkin.com/post/119943127151/angular-2-template-syntax
  * use an event to notify (EventEmitter) when the page is loaded and can be displayed: http://victorsavkin.com/post/119943127151/angular-2-template-syntax
* create a page renderer component
  * should receive a Page object
	* Q: if invoked through the router, how to pass the object?
  * should use the pages service to load the page's content
  * should display the page contents
  * should notify the pages component so that it can highlight the current selection
* check out susy: http://susy.oddbird.net/
* check out breakpoint: http://breakpoint-sass.com/
* create responsive grid
  * short & wide: tighten up and/or move things up (e.g., tablet in landscape)
  * narrow & tall: reposition things off canvas or move things down
  * enlarge font size if screen wider AND more vertical space
* angular 2
  * add router tsd once available
    * remove custom.angular2.d.ts
  * cleanup tsd.json (some Rx modules are probably not needed) 
* mig to jspm and systemjs
  * fix Docker config (probably dep version issues)
  * how to properly import the CSS if in JSPM and version in folder name
  * remove jspm@beta from readme, dockerfile, package.json etc once stable release available
* mig to TypeScript 1.5+
    * https://www.npmjs.com/package/gulp-typescript
  * http://json.schemastore.org/tsconfig
  * https://github.com/Microsoft/TypeScript/wiki/tsconfig.json
  * https://github.com/Microsoft/TypeScript/issues/1927
  * https://github.com/Microsoft/TypeScript/pull/3188
  * https://github.com/ivogabe/gulp-typescript/pull/99
* mig to TypeScript 1.6 (?)
  * implement the generic service once abstract classes are supported
* build
  * integrate PatternLab or something similar to create a style guide for dev/prod
	* goal: easily see all components (atomic design approach)
	* http://yeo-lab.com/#learn-more
  * check out json server: https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server
  * add ESlint? (also in sublime): http://eslint.org/
  * try to use the changed plugin to limit the overhead of allowing js/ts/styles to be anywhere in the app folder
  * use cache busting: gulp-cachebust
  * add scss-lint
  * https://www.npmjs.com/package/gulp-scss-lint
  * https://github.com/brigade/scss-lint#configuration
  * https://packagecontrol.io/packages/SublimeLinter-contrib-scss-lint
  * q: plugin for webstorm?
  * add to npm run serve
  * add css-lint
	* https://www.npmjs.com/package/gulp-csslint
	* rules: https://github.com/CSSLint/csslint/wiki/Rules-by-ID
	* example: https://github.com/twbs/bootstrap/blob/master/less/.csslintrc
	* https://github.com/SublimeLinter/SublimeLinter-csslint
	* q: plugin for webstorm?
	* add to npm run serve
  * prepare build for testing
	* karma, mocha, jasmine, testacular for unit testing
	  * https://www.npmjs.com/package/gulp-karma
	  * https://github.com/gulpjs/gulp/blob/master/docs/recipes/mocha-test-runner-with-gulp.md
	  * http://jasmine.github.io/2.3/introduction.html
	  * https://github.com/jasmine/jasmine
	  * https://www.npmjs.com/package/gulp-jasmine
	* protractor for functional tests
	  * E2E test framework for angular apps
  * optimize/cache: changed(...)
  * TSD: add angular new router to tsd.json once the types are availble
  * configure gulp-tsd to install if needed? https://www.npmjs.com/package/gulp-tsd
  * improve JS code style config (not great with object literals)
  * use a configuration file to list all keys to replace at build time (e.g., site title, site description, application name, version, etc)
  * add gulp size report: https://www.npmjs.com/package/gulp-sizereport/
  * enforce code quality/style checks (pre-commit hooks?)
  * js/ts formatting in webstorm?
  * configure Travis
	* once configured, enable for the project in https://travis-ci.org/profile/dsebastien
  * add gulp-inject to build: https://www.npmjs.com/package/gulp-inject
	* dynamically add scripts/stylesheets in the HTML without having to add script tags manually
  * generate release notes on GitHub like https://github.com/mgonto/restangular/releases (through GitHub's api)
  * check out plato for code complexity checks
  * add hthint: https://www.npmjs.com/package/gulp-htmlhint
  * if release, then fail the build in case of jshint, tshint, ... error
  * remove gulp load plugins plugin (?)
  * ensure that babel supports experimental features (e.g., decorators, etc)
  * ts-lint nok w/ TS 1.5: https://github.com/palantir/tslint/issues/356
	* re-add ts-lint to
	* prepare-default (gulpfile.babel.js)
	* serve (2 places: watch + prepare-serve)
  * add gulp-template
	* https://www.npmjs.com/package/gulp-template
	* var template = require('gulp-template');
	* goal: replace tokens in html, js, etc
	  * e.g., normalize.css version before sass is invoked
	  * app version
	* get the app version
		function getVersion(){
		  var pkg = JSON.parse(fs.readFileSync('package.json'));
		  return pkg.version;
		}
  * add gulp-bump
	* goal: easily bump the project version
	  * bump.major, bump.minor, bump.patch
	* var bump = require('gulp-bump');
  * check gulp-watch for incremental builds
	* https://www.npmjs.com/package/gulp-watch
	* https://github.com/floatdrop/gulp-watch/blob/master/docs/readme.md
	* combined with gulp-batch: https://www.npmjs.com/package/gulp-batch
  * gulp 4 migration
    * remove gulp-plumber
    * remove run-sequence
  * add archive task (depend on default): https://github.com/h5bp/html5-boilerplate/blob/master/gulpfile.js
  * switch build to TypeScript? https://www.npmjs.com/package/typescript-node
* css
  * apply styleguide to the codebase
  * define list styles
  * define link styles a{ }, a:visited{}, a:hover{}
  * reset: apply margin 0 & padding 0 to all elements (?)
  * ensure that font-size defined at html is 16px
  * ensure that the line-height is set to 1.2em (browser default)
  * ensure that tap targets are big enough
	* (nav a, button -> min-width: 48px, max-width: 48px)
	* padding to a tags (?)
  * search
	* like linked in (dropdown on the left to select search type (posts, tag, ... depending on WP api capabilities)
	* example: http://www.pluralsight.com/
	* other (dynamic aspect): http://arstechnica.com/information-technology/
  * :focus { outline: 0; } --> remove the ugly user agent default outline when focusing interactive elements BUT ensure that there are focus state styles set everywhere
  * try to load above-the-fold CSS directly (inline it??) and/or use loadCSS to load the rest of the css asynchronously using JS
  * define a good looking list style
  * for large screens: @media only screen and (min-width: 1140px) { width:1026px; /* 1140px - 10% for margins */ margin:0 auto; }
  * drop shadow below header
  * support two posts display styles: compact vs expanded (ala GReader)
  * if polymer
	* core-media-query query="max-width: 500px" queryMatches="{{smallscreen}}" <- becomes true when matches the query
  * if no polymer
	* link rel="stylesheet" media="(max-width: 800px)" href="..." />
  * use css 3
	* transforms / 3d transforms
	* animation
	* box-decoration-break
  * printing
	* create/test print stylesheet (media query + display: none on everything not needed, add page breaks where appropriate)
	* button to print an article
	* add print preview https://github.com/etimbo/jquery-print-preview-plugin
  * replace text-rendering: optimizeLegibility
	* by font-feature-settings once broadly supported: http://caniuse.com/#feat=font-feature
  * icon fonts
	* define (responsive) font-awesome icon style
	* add loading icons
* html
  * use tabindex on all main elements (sections, posts, etc)
  * add <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png"> with different sizes
  * add rss feed link <link rel="alternate" type="application/rss+xml" title="..." href="...">
  * add <link rel="publisher" href="...g+?" />
  * add html class="no-js" and check if js is enabled
  * rss and pingback: <link rel="canonical" ...>
  * replace color for
	* msapplication-TileColor
	* theme-color
* design
  * create the theme & choose color scheme
	* dark/gray but this time avoiding styling errors of the past: http://www.webdesignerdepot.com/2009/08/the-dos-and-donts-of-dark-web-design/
	* orange links with animated underlining
  * icons going white on mouse over (animation)
  * choose a nice font
  * replace msapplication-TileColor and theme-color with final color once defined
  * replace default app icons (kept from Google Web Starter Kit)
  * favicon
* js
  * review midnight light v1 jquery plugins
  * add reading progress bar
	* https://github.com/jeremenichelli/scrollProgress
	* https://css-tricks.com/reading-position-indicator/
  * syntax highlighting + collapse on small devices: https://eduardoboucas.com/blog/2014/11/30/collapsing-code-snippets-on-mobile-devices.html
  * create a full blown wordpress rest API client. Reference client APIs:
	* NodeJS: https://github.com/kadamwhite/wordpress-rest-api
	* Backbone.js: https://github.com/WP-API/client-js
	* AngularJS: https://github.com/jeffsebring/angular-wp-api
  * ensure that videos are responsive: fitvidsjs.com
  * ensure that text is responsive: fittextjs.com
  * integrate lodash
  * integrate modernizr
  * add console wrapper lib (?): http://benalman.com/projects/javascript-debug-console-log/
	* add debug statements during dev & remove when building prod version
  * check out jquery sticky
  * try to use async on all scripts (for production), even if loaded at the end of the page
* angular
  * WP links vs angular routing?
	* ideally the URLs should perfectly match those in WP so that the sitemap.xml generated by the WP plugin remains valid
  * adapt URL/history when navigating in the SPA. Leverage the HTML5 history API (e.g., when going from post to post/section to section)
	* https://blog.twitter.com/2012/implementing-pushstate-for-twittercom
	* https://css-tricks.com/using-the-html5-history-api/
  * rename ng-viewport once renamed in angular new router
  * find a way to rename the controller for the view (posts vs postsController)
  * integrate angular-mocks and angular-loader
  * integrate ng-animate: https://docs.angularjs.org/api/ngAnimate
  * add meta name="keywords" and adapt contents based on the section currently displayed (e.g., keywords of the current post)
  * get posts in the correct order
  * get only posts titles & metadata; load the rest when requested
* testing
  * add tests
* research
  * check out stealJS
  * evaluate haml: http://haml.info/
	* or mustache :)
  * review pure.css code (e.g., find useful classes, responsive images, hiding elements, ...)
  * check out data URIs (include in build?)
  * check out applicache cache: http://diveintohtml5.info/offline.html & http://alistapart.com/article/application-cache-is-a-douchebag
  * user-select: none (prevent selection of some elements)
  * check out postcss
	* https://github.com/postcss/postcss
	* https://twitter.com/postcss
  * how to generate sitemap?
	* keep WP plugin or make the app independent (i.e., specific route in app to dynamically generate the sitemap)
  * check latest way to incorporate touch icons for iOS and chrome: https://mathiasbynens.be/notes/touch-icons
  * add touch/pointer events support (e.g., double tap?)
  * add keyboard shortcuts
* functional
  * integrate authentication to be able to post comments, edit posts, etc
  * handle 404 gracefully
  * badges to highlight new/unread items
	* read/not read status can be kept using LocalStorage
	* read/not read status can be switched by clicking on a button
	* a filter could be activated to hide all read articles (using the :empty pseudo-selector)
  * offline first / online/offline status
	* display somewhere
	* if only, refresh displayed posts, twitter messages, etc
	* cache articles, comments, read/unread status, ...
	  * quid one person with n devices?
  * markdown support: if posts are written using markdown on the server, they should display correctly on the client
* ui & behavior
  * loading overlay while fetching data (e.g., when posts are loading)
	* example: https://css-tricks.com/html5-progress-element/
  * header: something like http://benfrain.com/
	* social: links to Fb, Tw, G+, Li, StackOverflow, GitHub
	  * use fontawesome icons (http://fortawesome.github.io/Font-Awesome/cheatsheet/)
	  * example: <i class="icon-github-squared" style="font-size: 16rem;"></i>
  * reading progress bar under header
  * menu bar
	* search box
	* hide when scrolling down & show small logo (text only to limit height) (like linked in)
	* if width too small => put links in a dropdown
	* use media queries to act as toggles for UI sections (toggle + focus on if visible)
	* same angular controller for different elements that present the same data differently
  * posts & comments
	* title
	* author + image
	* date
	* badges
	* tags
	* comments
	  * not displayed by default (but count visible)
	  * button bar to display posts (5?) then again the button bar to load more
	  * support disqus
	  * support gravatar (?)
  * archives (list years/months posts)
  * sidebar
	* hideable (automatic if width too small)
	* see satellite at demo.wordpress.com
	* tools
	  * social share buttons: https://gauntface.com/styleguide/view/socialbtns/
	  * local translate (using gtranslate)
	  * increase/reduce size
	  * chat (?)
	* recent posts
	* twitter
	  * display tweets
	* categories
	* tags cloud
	* meta
  * links section
	* show latest Sharlii links (10?)
	* show ellipsis for next ones (infinite scroll)
	* provide search
  * footer
	* back to top link
	* add link to WP admin section (footer)
* UI sugar
  * animations / transitions
  * infinite scrolling
  * picture modes
	* lightbox: http://www.jacklmoore.com/colorbox/
	* fullscreen
	* dim light
	* adapt pictures to size (responsive images)
* preprod
  * put back permalinks in WP config + doc necessity
  * SEOoooooo
  * uncomment google analytics once ready
* abstract the data access layer
* review CORS config
  * should the api allow credentials to be passed (ie cookies)? http://stackoverflow.com/questions/24687313/what-exactly-does-the-access-control-allow-credentials-header-do
* wp API usage
  * create a WP rest api client in core and inject it in all related services rather than spreading wp-related code all over the place
  * inject the wpi API class in the root injector through bootstrap
  * limit the retrieved fields -- currently not supported: https://github.com/WP-API/WP-API/issues/572
* add !default to scss variables
* angular alpha 32
  * replace @Parent by @Ancestor: https://github.com/angular/angular/pull/3159
* TypeScript: check the status of files, filesGlob (currently only supported by the Atom typescript editor.. and exclude
  * https://github.com/Microsoft/TypeScript/issues/1927
  * https://github.com/Microsoft/TypeScript/pull/3188
  * exclude list does not support wilcards. It must simply be a list of files and/or directories
* Typescript:
   * remove 'format register'; when the following is fixed: https://github.com/Microsoft/TypeScript/issues/3937
* TypeScript 1.6
  * find if/how to inject service based on abstract classes: http://stackoverflow.com/questions/31202162/interface-based-programming-with-typescript-angular-2-systemjs
