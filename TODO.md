* check out susy + breakpoint
* create responsive grid
  * short & wide: tighten up and/or move things up (e.g., tablet in landscape)
  * narrow & tall: reposition things off canvas or move things down
  * enlarge font size if screen wider AND more vertical space
* build
  * add ESlint? (also in sublime): http://eslint.org/
  * try to use the changed plugin to limit the overhead of allowing js/ts/styles to be anywhere in the app folder
  * integrate tsconfig.json:
	* https://www.npmjs.com/package/gulp-typescript
	* http://json.schemastore.org/tsconfig
	* https://github.com/Microsoft/TypeScript/wiki/tsconfig.json
	* https://github.com/ivogabe/gulp-typescript/pull/99super
  * version css & js code (add timestamp)
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
	* karma, mocha, jasmine for unit testing
	  * https://www.npmjs.com/package/gulp-karma
	  * https://github.com/gulpjs/gulp/blob/master/docs/recipes/mocha-test-runner-with-gulp.md
	  * http://jasmine.github.io/2.3/introduction.html
	  * https://github.com/jasmine/jasmine
	  * https://www.npmjs.com/package/gulp-jasmine
	* protractor for functional tests
  * optimize/cache: changed(...)
  * TSD: add angular new router to tsd.json once the types are availble
  * configure gulp-tsd to install if needed? https://www.npmjs.com/package/gulp-tsd
  * improve JS code style config (not great with object literals)
  * use a configuration file to list all keys to replace at build time (e.g., site title, site description, application name, version, etc)
  * integrate webpack or browserify?
	* avoid <script> tags and apply DRY principle
	* require component styles rather than importing
  * add gulp size report: https://www.npmjs.com/package/gulp-sizereport/
  * add a debug boolean config param to determine whether to display stream contents or not
  * enforce code quality/style checks (pre-commit hooks?)
  * js/ts formatting in webstorm?
  * npm run serve: add clean
  * add service worker generation: https://github.com/google/web-starter-kit/blob/master/gulpfile.js
  * add Travis (?)
  * add gulp-inject to build: https://www.npmjs.com/package/gulp-inject
	* dynamically add scripts/stylesheets in the HTML without having to add script tags manually
* css
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
* html
  * use tabindex on all main elements (sections, posts, etc)
  * add <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png"> with different sizes
  * add rss feed link <link rel="alternate" type="application/rss+xml" title="..." href="...">
  * add <link rel="publisher" href="...g+?" />
  * add html class="no-js" and check if js is enabled
  * rss and pingback: <link rel="canonical" ...>
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
  * review pure.css code (e.g., find useful classes, responsive images, hiding elements, ...)
  * check out data URIs (include in build?)
  * check out applicache cache: http://diveintohtml5.info/offline.html & http://alistapart.com/article/application-cache-is-a-douchebag
  * user-select: none (prevent selection of some elements)
  * check out fontawesome (icons and transforms)
  * check out postcsssuper
	* https://github.com/postcss/postcsssuper
	* https://twitter.com/postcsssuper
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
	* social: links to Fb, Tw, G+, Li
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
  * uncomment google analytics once readysuper
