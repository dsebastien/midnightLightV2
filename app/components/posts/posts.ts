///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

// import Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

import * as Rx from 'rx';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Post} from 'components/posts/posts.model';
import {PostsService, PostsServiceImpl} from 'components/posts/posts.service';

@Component({
	selector: 'posts',
	viewInjector: [
		PostsServiceImpl //todo rename to PostsService -- assume that during testing the types won't matter (?)
	] // needed so that the service gets injected (configured the injector of this specific component
})
@View({
	templateUrl: 'components/posts/posts.template.html',
	directives: [coreDirectives]
})
export class Posts {
	private postsServices: PostsService;

	/**
	 * The currently loaded posts
	 * @type {any[]}
	 */
	private posts : Array<Post> = new Array<Post>();
	
	// todo try and inject the interface rather than the concrete type --> adapt the view injector?
	constructor(postsService: PostsServiceImpl) { // fixme use the interface instead
		console.log('Loading the Posts component');
		this.postsServices = postsService;
		
		// todo refactor: perform the json -> Post objects transformation in the service and feed the posts in the observable one by one
		postsService.fetchPosts().subscribe(
			(rawPosts: Array<any>) => { // todo set correct type
				console.debug('Posts received: ' + rawPosts.length);
				
				for (var i = 0 ; i < rawPosts.length ; i++) {
					var obj = rawPosts[i];
			
					var post: Post = new Post();
					post.title = obj.title;
					post.author = obj.author.nickname;
					post.authorUrl = obj.author.URL;
					post.content = obj.content;
					this.posts.push(post);
				}
			},
			(error: any) => { // todo set correct type
				console.log(`An error occurred while retrieving the posts: ${error}`);
			},
			() => {
				console.log('Posts retrieval completed');
				//console.log(this.posts);
			});
	}
}
