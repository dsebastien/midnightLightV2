///<reference path="../../../ts-typings/tsd.d.ts" />
///<reference path="../../../ts-typings/typescriptApp.d.ts" />

'use strict';

// import Angular 2
import { Component, View, NgFor } from 'angular2/angular2';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Post} from './post.model';
import {PostsService} from './posts.service';

@Component({
	selector: 'component-posts'
})
@View({
	templateUrl: 'components/posts/posts.template.html',
	directives: [NgFor]
})
export class Posts {
	private posts : Array<Post> = new Array<Post>();
	
	//TODO inject posts service
	
	constructor() {
		console.log('Loading the Posts component');
		
		// todo replace w/ service usage
		var post: Post = new Post();
		post.title = "Super title";
		post.author = "Sebastien";
		post.authorUrl = "https://www.dsebastien.net";
		post.content = "The content you always dreamed of";
		this.posts.push(post);
		
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
