///<reference path="../../../ts-typings/tsd.d.ts" />
///<reference path="../../../ts-typings/typescriptApp.d.ts" />

module MidnightLight.Posts.Controllers {
	'use strict';

	import Configuration = MidnightLight.Core.Commons.Configuration;
	import Post = Model.Post;

	export class PostsController {
		static UID : string = 'PostsController'; // Note that this name MUST be the same as the controller name. This is related to the Angular router. If the convention is not respected, the router will fail to identify this controller. Refer to https://angular.github.io/router/$componentLoaderProvider
		static $inject = [Services.PostsService.UID]; // Angular-way to inject dependencies

		private posts : Array<Post> = new Array<Post>();

		constructor(private postsService : Services.PostsService) {
			console.log(`Loading the ${PostsController.UID} controller`);
			this.postsService.getPosts().success((rawData) => {
				var rawPosts : any[] = rawData;

				for (var i = 0 ; i < rawPosts.length ; i++) {
					var obj = rawPosts[i];

					var post: Post = new Post();
					post.title = obj.title;
					post.author = obj.author.nickname;
					post.authorUrl = obj.author.URL;
					post.content = obj.content;
					this.posts.push(post);
				}
			});
		}
	}

	angular.module(Configuration.applicationName)
		.controller(PostsController.UID, PostsController);
}
