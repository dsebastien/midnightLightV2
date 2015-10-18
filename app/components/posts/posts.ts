"use strict";

// import Angular 2
import {Component, View, CORE_DIRECTIVES} from "angular2/angular2";

import * as Rx from "@reactivex/rxjs";

import {Configuration} from "../../core/commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Post} from "./posts.model";
import {PostsService} from "./posts.service";

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
	private postsService:PostsService;

	/**
	 * The currently loaded posts
	 * @type {any[]}
	 */
	private _posts : Array<Post> = [];

	constructor(postsService:PostsService) {
		console.log("Loading the Posts component");
		this.postsService = postsService;

		let postsObservable:Rx.Observable<Post> = postsService.fetchPosts();
		let postsObservableSubscription: Rx.Subscription<Post> = postsObservable.subscribe(
			(post:Post) => {
				this._posts.push(post);
			},
			(error:any) => { // todo set correct type
				console.log(`An error occurred while retrieving the posts: ${error}`);
			},
			() => {
				console.log("Posts retrieval completed");
				postsObservableSubscription.unsubscribe();
			});
	}

	/**
	 * Get all posts
	 * @returns {Array<Post>}
	 */
	get posts(): Array<Post> {
		return this._posts;
	}
}
