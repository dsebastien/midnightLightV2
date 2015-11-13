"use strict";

// import Angular 2 deps
import "zone.js";
import "reflect-metadata";

// import Angular 2
import {Component, View, CORE_DIRECTIVES, bind, bootstrap} from "angular2/angular2";
import {Http, HTTP_PROVIDERS} from "angular2/http";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, Route, RouterOutlet, RouterLink, Router, LocationStrategy, PathLocationStrategy, ROUTER_PROVIDERS} from "angular2/router";
// todo add HTML5LocationStrategy (whatever the new name) & remove path location strategy


// app configuration
import {Configuration} from "./commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss

// app services
import {BlogMetadataService} from "./services/blogmetadata.service";
import {BlogMetadata} from "./services/blogmetadata.model";

// app components
import {Home} from "../pages/home/home";
import {Posts} from "../components/posts/posts";
import {Pages} from "../components/pages/pages";
import {PageRenderer} from "../components/page-renderer/page-renderer";

// app services
//import {appServicesInjectables} from "core/services/services";

@Component({
	selector: "app"
})
@View({
	templateUrl: "core/core.bootstrap.template.html", //template: "<router-outlet></router-outlet>",
	directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink, Pages]
})
@RouteConfig([
	//TODO put back the old syntax (comment below) once the typings are correct
	// reference: https://github.com/angular/angular/issues/3637
	// fix could land w/ 36+
	{path: "/", component: Home, as: "Home", data: undefined},
	{path: "/Posts", component: Posts, as: "Posts"},
	{path: "/PageRenderer/:pageToRender", component: PageRenderer, as: "PageRenderer"} // given the parameter it renders a page
	/*
	new Route({path: "/", component: Home, as: "Home", data: undefined}), // written differently
	new Route({path: "/Posts", component: Posts, as: "Posts"}),
	new Route({path: "/PageRenderer/:pageToRender", component: PageRenderer, as: "PageRenderer"}) // given the parameter it renders a page
	*/
])
class App {

	//blogMetadataService: BlogMetadataService;
	blogMetadata: BlogMetadata = new BlogMetadata();

	constructor() { // http: Http
		// default to mine.. :)
		this.blogMetadata.title = Configuration.applicationName;
		this.blogMetadata.description = Configuration.applicationDescription;
		this.blogMetadata.url = Configuration.applicationUrl;

		/* TODO implement once I better understand how change detection works
		this.blogMetadataService = new BlogMetadataService(http); // loads the metadata (async)

		let blogMetadataObservable: Rx.Observable = this.blogMetadataService.fetchMetadata()
		let blogMetadataObservableSubscription: Rx.IDisposable = blogMetadataObservable.subscribe(
			(blogMetadata: BlogMetadata) => {

				//this.blogMetadata.title = blogMetadata.title;
				//this.blogMetadata.description = blogMetadata.description;
				//this.blogMetadata.url = blogMetadata.url;

				//this.blogMetadata = blogMetadata;

			},
			(error: any) => { // todo set correct type
				console.log(`An error occurred while retrieving the blog metadata: ${error}`);
			},
			() => {
				console.log("Blog metadata retrieval completed");
				blogMetadataObservableSubscription.dispose();
			});
		*/
	}
}

// bootstrap our app
console.log("Bootstrapping the App");

// in [] is the list of injector bindings. Those bindings are used when an injector is created. Passing these here make the bindings available application-wide
bootstrap(App, [
	//appServicesInjectables, // alternative way of filling the injector with all the classes we want to be able to inject
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	bind(LocationStrategy).toClass(PathLocationStrategy) // enables the following: /#/<component_name> rather than /<component_name>
	//todo replace with
	//bind(LocationStrategy).toClass(HTML5LocationStrategy) // enable HTML5 history API location strategy

]).then(
	success => console.log("Bootstrap successful"),
	error => console.error(error)
);

/*
// Helper function to mark HTML data as trusted in combination with ng-bind-html="value | unsafe"
// Requires ngSanitize
// Reference: http://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu
app.filter('unsafe', ($sce) => { return $sce.trustAsHtml; });
*/
