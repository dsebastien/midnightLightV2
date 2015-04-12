* choose between Bootstrap & pure
  * http://yui.github.io/skinbuilder/?mode=pure
  * http://purecss.io/
  * if pure -> remove bootstrap css & js from code and dependencies
* add less
* learn http://lesscss.org/
* add jquery
* REST API URL: http://dsebastien.net/wp-json
* add meta name="keywords" and adapt contents based on the section currently displayed (e.g., keywords of the current post)
* tags + role=""
  * <header>
  * <footer>
  * <section>
  * <aside>
  * <article>
  * <pre>
  * <blockquote>
  * <u>
  * <b>
  * <small>
  * <mark>
  * <del>
  * <s>: strikethrough
  * <strong>: bold
  * <i>: voice/technical terms
  * <abbr title="OO">Object Oriented</abbr>
  * <address>
  * <kbd>
  * <samp>
* use tabindex on all main elements (sections, posts, etc)
* h1 = site title, h2-h6 for the rest
* replace default app icons (kept from Google Web Starter Kit)
* check gulp-less-sourcemap effectiveness
  * sourceMapRootpath?? https://www.npmjs.com/package/gulp-less-sourcemap
* tags
* use a configuration file to list all keys to replace at build time (e.g., site title, site description, application name, version, etc)
* replace msapplication-TileColor and theme-color with final color once defined
* review gulp recipes
  https://github.com/gulpjs/gulp/tree/master/docs/recipes#recipes
* create/test print stylesheet (media query + display: none on everything not needed, add page breaks where appropriate)
* integrate authentication to be able to post comments, edit posts, etc
* SEOoooooo
* add link to WP admin section
* add <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png"> with different sizes
* add tests (karma, mocha, protractor ...)
  * https://www.npmjs.com/package/karma
* add gulp-inject to build: https://www.npmjs.com/package/gulp-inject
* add lodash: https://www.npmjs.com/package/lodash
* add gulp-karma to build: https://www.npmjs.com/package/gulp-karma
* use z-index correctly
* add rss feed link <link rel="alternate" type="application/rss+xml" title="..." href="...">
* ensure that images are responsive: max-width: 100%;
* ensure that videos are responsive: fitvidsjs.com
* ensure that text is responsive: fittextjs.com
* leverage the HTML5 history API to modify the url/history when going from post to post/section to section
  * https://blog.twitter.com/2012/implementing-pushstate-for-twittercom
  * https://css-tricks.com/using-the-html5-history-api/
* for large screens: @media only screen and (min-width: 1140px) {
	width:1026px; /* 1140px - 10% for margins */
    margin:0 auto;
  }
* add travis.yml
* add modernizr
* add html class="no-js" and check if js is enabled. 
* handle 404 gracefully
* uncomment google analytics once ready
* configure fonts and review typography.less and variables.less
* drop shadow below header
* add gulp size report: https://www.npmjs.com/package/gulp-sizereport/