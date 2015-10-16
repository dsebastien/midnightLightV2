///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />
"format register"; // todo remove when the following issue is fixed: https://github.com/Microsoft/TypeScript/issues/3937
"use strict";

// import Angular 2
import {Component, View, CORE_DIRECTIVES} from "angular2/angular2";

import * as Rx from "@reactivex/rxjs";

import {Configuration} from "core/commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Post} from "components/posts/posts.model";
import {PostsService} from "components/posts/posts.service";

@Component({
	selector: "posts",
	viewBindings: [
		PostsService
	] // needed so that the service gets injected (configured the injector of this specific component
})
@View({
	templateUrl: "components/posts/posts.template.html",
	directives: [CORE_DIRECTIVES]
})
export class Posts {
	private postsService: PostsService;

	/**
	 * The currently loaded posts
	 * @type {any[]}
	 */
	private posts : Array<Post> = new Array<Post>();

	constructor(postsService: PostsService) {
		console.log("Loading the Posts component");
		this.postsService = postsService;

		let postsObservable: Rx.Observable<Post> = postsService.fetchPosts();
		let postsObservableSubscription: Rx.IDisposable = postsObservable.subscribe(
			(post: Post) => {
					this.posts.push(post);
			},
			(error: any) => { // todo set correct type
				console.log(`An error occurred while retrieving the posts: ${error}`);
			},
			() => {
				console.log("Posts retrieval completed");
				//TODO dispose once done
				//postsObservableSubscription.dispose();
			});
	}
}
