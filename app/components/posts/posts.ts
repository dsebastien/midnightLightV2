///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

// import Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

import * as Rx from 'rx';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Post} from 'components/posts/posts.model';
import {PostsService} from 'components/posts/posts.service';

@Component({
	selector: 'posts',
	viewInjector: [PostsService] // needed so that the service gets injected (configured the injector of this specific component
})
@View({
	templateUrl: 'components/posts/posts.template.html',
	directives: [coreDirectives]
})
export class Posts {
	private postsServices: PostsService;
	
	//private posts : Array<Post> = new Array<Post>();
	
	constructor(postsService: PostsService) {
		console.log('Loading the Posts component');
		this.postsServices = postsService;
		
		// todo extract the data
		var subscription = postsService.fetchPosts().subscribe(
			function onNext(x){
				console.log('Result received: ',x);
			},
			function onError(err){
				console.log('An error occurred: ',err);
			},
			function onCompleted(){
				console.log("Done!");
				subscription.dispose(); // we've got enough
			}
		);
		//posts.subscribe().
		//console.log(posts);
		
		// todo replace w/ service usage
		/*
		var post: Post = new Post();
		post.title = "Super title";
		post.author = "Sebastien";
		post.authorUrl = "https://www.dsebastien.net";
		post.content = "The content you always dreamed of";
		this.posts.push(post);
		*/
		
		//postsService.getPosts()
		//	.map(res => console.log(res));
			//.subscribe(posts => {this.posts = posts;});
		
		//this.postsService.getPosts().success((rawData) => {
		//	var rawPosts : any[] = rawData;
		//
		//	for (var i = 0 ; i < rawPosts.length ; i++) {
		//		var obj = rawPosts[i];
		//
		//		var post: Post = new Post();
		//		post.title = obj.title;
		//		post.author = obj.author.nickname;
		//		post.authorUrl = obj.author.URL;
		//		post.content = obj.content;
		//		this.posts.push(post);
		//	}
		//});
	}
}
