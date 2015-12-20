"use strict";

// import Angular 2
import {Component, View} from "angular2/core";
import {Http, HTTP_PROVIDERS} from "angular2/http";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";

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

@Component({
	selector: "app"
})
@View({
	templateUrl: "core/app.template.html",
	directives: [RouterOutlet, RouterLink, Pages]
})
@RouteConfig([
	{path: "/", component: Home, as: "Home", data: undefined},
	{path: "/Posts", component: Posts, as: "Posts"},
	{path: "/PageRenderer/:pageToRender", component: PageRenderer, as: "PageRenderer"} // given the parameter it renders a page
])
export class App {

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
