///<reference path="../../typings/tsd.d.ts" />
///<reference path="../../typings/typescriptApp.d.ts" />
'format register'; // todo remove when the following issue is fixed: https://github.com/Microsoft/TypeScript/issues/3937
'use strict';


// import Angular2 deps
import 'zone.js';
import 'reflect-metadata';
import 'es6-shim'; // fixes an issue relating to list.fill (list.fill is not a function)

// import Angular 2
import {Component, View, Http, coreDirectives, bind, bootstrap, httpInjectables} from 'angular2/angular2';
//import * as ng from 'angular2/angular2';

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, RouterOutlet, RouterLink, Router, LocationStrategy, HashLocationStrategy, routerInjectables} from 'angular2/router'; // todo add HTML5LocationStrategy
// TODO remove hash location strategy

// app configuration
import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss

// app services
import {BlogMetadataService} from 'core/services/blogmetadata.service';
import {BlogMetadata} from 'core/services/blogmetadata.model';

// app components
import {Home} from 'pages/home/home';
import {Posts} from 'components/posts/posts';
import {Pages} from 'components/pages/pages';
import {PageRenderer} from 'components/page-renderer/page-renderer';

// app services
//import {appServicesInjectables} from 'core/services/services';

@Component({
	selector: 'app' // tag used in the index.html
})
@View({
	templateUrl: 'core/core.bootstrap.template.html', //template: '<router-outlet></router-outlet>',
	directives: [coreDirectives, RouterOutlet, RouterLink, Pages]
})
@RouteConfig([
	{path: '/', component: Home, as: 'home'}, // the as serves as alias for links, etc
	{path: '/posts', component: Posts, as: 'posts'},
	{path: '/page-renderer/:pageToRender', component: PageRenderer, as: 'page-renderer'} // given the parameter it renders a page
])
class App {
	name: string;

	//blogMetadataService: BlogMetadataService;
	blogMetadata: BlogMetadata = new BlogMetadata();

	constructor() { // http: Http
		this.name = Configuration.applicationName;

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
				console.log('Blog metadata retrieval completed');
				blogMetadataObservableSubscription.dispose();
			});
		*/
	}
}

// bootstrap our app
console.log('Bootstrapping the App');

// in [] is the list of injector bindings. Those bindings are used when an injector is created. Passing these here make the bindings available application-wide
bootstrap(App, [
	//appServicesInjectables, // alternative way of filling the injector with all the classes we want to be able to inject
	routerInjectables,
	httpInjectables,
	bind(LocationStrategy).toClass(HashLocationStrategy) // enable HashLocationStrategy: /#/<component_name> rather than /<component_name>
	//todo replace with
	//bind(LocationStrategy).toClass(HTML5LocationStrategy) // enable HTML5 history API location strategy

]).then(
	success => console.log('Bootstrap successful'),
	error => console.error(error)
);

/*
// Helper function to mark HTML data as trusted in combination with ng-bind-html="value | unsafe"
// Requires ngSanitize
// Reference: http://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu
app.filter('unsafe', ($sce) => { return $sce.trustAsHtml; });
*/
