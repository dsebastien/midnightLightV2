///<reference path="../../ts-typings/tsd.d.ts" />
///<reference path="../../ts-typings/typescriptApp.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//'use strict'; // TODO put back strict mode once TypeScript 1.5 final is available: https://github.com/Microsoft/TypeScript/issues/3251#issuecomment-104669769
// import Angular2 deps
require('zone.js');
require('reflect-metadata');
require('es6-shim'); // fixes an issue relating to list.fill (list.fill is not a function)
// import Angular 2
var angular2_1 = require('angular2/angular2');
// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
var router_1 = require('angular2/router');
var configuration_1 = require('core/commons/configuration'); // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
var home_1 = require('components/home/home');
var posts_1 = require('components/posts/posts');
var App = (function () {
    function App() {
        this.name = configuration_1.Configuration.applicationName;
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app' // tag used in the index.html
        }),
        angular2_1.View({
            templateUrl: 'core/core.bootstrap.template.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'home' },
            { path: '/posts', component: posts_1.Posts, as: 'posts' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
// start our app
console.log("Starting the App");
angular2_1.bootstrap(App, [router_1.routerInjectables]); // in [] is the list of injector bindings. Those bindings are used when an injector is created. Passing these here make the bindings available application-wide
/*
// Helper function to mark HTML data as trusted in combination with ng-bind-html="value | unsafe"
// Requires ngSanitize
// Reference: http://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu
app.filter('unsafe', ($sce) => { return $sce.trustAsHtml; });
*/
//# sourceMappingURL=core.bootstrap.js.map