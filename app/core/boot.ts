"use strict";

// import application
import {App} from "./app";

// import Angular 2
import {bootstrap} from "angular2/platform/browser";
import {provide, enableProdMode} from "angular2/core";
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {ELEMENT_PROBE_PROVIDERS} from "angular2/platform/common_dom";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {LocationStrategy, PathLocationStrategy, ROUTER_PROVIDERS} from "angular2/router";

// app services
//import {appServicesInjectables} from "core/services/services";

// enable production mode of Angular
//enableProdMode(); // enable for production (also uncomment the import above!)

// bootstrap our app
console.log("Bootstrapping the App");

// in [] is the list of injector bindings. Those bindings are used when an injector is created. Passing these here make the bindings available application-wide
bootstrap(App, [
	//appServicesInjectables, // alternative way of filling the injector with all the classes we want to be able to inject
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	ELEMENT_PROBE_PROVIDERS, // remove in production
	provide(LocationStrategy, { useClass: PathLocationStrategy }) // enables the following: /#/<component_name> rather than /<component_name>

]).then(
	(success:any) => console.log("Bootstrap successful"),
	(error:any) => console.error(error)
);

/*
// Helper function to mark HTML data as trusted in combination with ng-bind-html="value | unsafe"
// Requires ngSanitize
// Reference: http://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu
app.filter('unsafe', ($sce) => { return $sce.trustAsHtml; });
*/
