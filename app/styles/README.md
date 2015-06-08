# About
Note that all SASS partials (files beginning with a _) should be placed in a sub-directory (for clarity) and should be imported by one of the SASS files in this folder

The vendor.scss (or vendor.css if renamed) file will be processed separately for dist during the build. This allows to cleanly separate what belongs to the application and what comes from third parties.

# Styles guidelines
* separate structure from chrome
* (re)use variables whenever possible
* try to provide flexibility: define what you don't know, particularly width & height
* let content control the height
* let grids control the width
* aim for low specificity: make all rules the same strength (makes combining components easier)
  * minimize the depth of rules
  * minimize the dependency on the HTML structure (related to the above)
* predictability: ensure that the components work consistently

# Naming convention
Goal: follow a common naming approach such as:
  * SMACSS (https://smacss.com/)
  * BEM (https://css-tricks.com/bem-101/)
  * Atomic Design approach (http://bradfrost.com/blog/post/atomic-web-design)
  * or a mix therof: CCSS (https://github.com/sathify/CCSS) (SMACSS + BEM)

Basic convention: `<namespace>-<ComponentName>-<elementName>--<modifierName> { ... }`
Mind the case!
  * namespace: lowercase
  * ComponentName: PascalCase (i.e., camelCase with first character uppercase)
  * elementName: camelCase with first character lowercase
  * modifierName: idem
* namespace: isolate different groups of styles (i.e., categories)
  * b: base -- style rules which are almost exclusively single element selectors but can include attribute selectors, pseudo-class selectors, child selectors or sibling selectors
  * examples
	* generic styles, css resets, default link styles, default font styles, body backgrounds, ...
	* `b-fontSize--normal, b-fontSize--large, a { ... }, a:hover{ ... }`
* u: utility -- utility styles
  * examples: `u-clearBoth, u-w100`
* c: component
  * components should do one thing and do it well
  * examples: login form, search box, carousel, social share buttons, ...
  * components should not rely on IDs or element selectors
  * components should be standalone, portable and reusable
* m: module -- larger part of the UI, for example a set of components put together (e.g., product grid, sidebar sections, ...)
  * modules should be standalone, portable and reusable
  * modules should be moveable to different parts of the layout without breaking
  * modules can be nested in one another
  * modules should not rely on IDs or element selectors
  * modules should avoid specificity battles
* l: layout -- divide the page into sections. Layouts hold one or more modules together
  * layouts should only care about positioning and placement
  * can be split in two parts: major (used only once in any given page) or minor (might be used multiple times on a single page)
  * major layout elements can have an ID and be styled using ID selectors
  * examples
	* header
	* footer
	* sidebar
	* ...
* t: theme -- describe alternative looks for layouts/modules/...
  * only use if you want/need to get fancy
  * themes can affect any of the other namespaces
  * examples
	* override a base style to modify the look and feel of an element
	* modify some element of a component
	* ...
* ...
* Atomic design approach relation:
  * base styles = atoms
  * components = molecules
  * modules = organisms
  * layouts = templates
* ComponentName: the B of BEM -- the component (mandatory if it's a component)
* elementName: the E of BEM -- the element (not necessarily part of a component) (mandatory)
* modifierName: the M of BEM -- a variant (e.g., opened vs closed) (optional) (the M of BEM)

Some examples:
  * `.c-Posts-title`
  * `.c-Posts-author`
  * `.c-Posts-a`
  * `.c-Posts-comments-closed`
  * `.c-Posts-comments-opened`

# Sass guidelines
* use nested styles using @include (e.g., https://github.com/sathify/CCSS/tree/master/styles/scss)

