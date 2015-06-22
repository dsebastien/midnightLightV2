///<reference path="../../ts-typings/tsd.d.ts" />
///<reference path="../../ts-typings/typescriptApp.d.ts" />

//'use strict'; // TODO put back strict mode once TypeScript 1.5 final is available: https://github.com/Microsoft/TypeScript/issues/3251#issuecomment-104669769

// import Angular2 deps
import 'zone.js';
import 'reflect-metadata';
import 'es6-shim'; // fixes an issue relating to list.fill (list.fill is not a function)

// import Angular 2
import { Component, View, bootstrap } from 'angular2/angular2';

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Home} from 'components/home/home';
import {Posts} from 'components/posts/posts';

@Component({
	selector: 'app' // tag used in the index.html
})
@View({
	templateUrl: 'core/core.bootstrap.template.html', //template: '<router-outlet></router-outlet>',  
	directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
	{path: '/', component: Home, as: 'home'}, // the as serves as alias for links, etc
	{path: '/posts', component: Posts, as: 'posts'}
])
class App {
	name: string;

	constructor() {
		this.name = Configuration.applicationName;
	}
}

// start our app
console.log("Starting the App");
bootstrap(App, [routerInjectables]); // in [] is the list of injector bindings. Those bindings are used when an injector is created. Passing these here make the bindings available application-wide

/*
// Helper function to mark HTML data as trusted in combination with ng-bind-html="value | unsafe"
// Requires ngSanitize
// Reference: http://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu
app.filter('unsafe', ($sce) => { return $sce.trustAsHtml; });
*/
