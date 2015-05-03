///<reference path="../../../ts-typings/tsd.d.ts" />
///<reference path="../../../ts-typings/typescriptApp.d.ts" />

module MidnightLight.Controllers {
	'use strict';

	export class PostsController {
		static $inject = ['$scope', 'MidnightLight.Services.PostsService'];

		private posts : Array<Model.Post> = new Array<Model.Post>();

		constructor(private $scope : ng.IScope, private postsService : Services.PostsService) {
			this.postsService.getPosts().success((rawData) => {
				var rawPosts : any[] = rawData;

				for (var i = 0 ; i < rawPosts.length ; i++) {
					var obj = rawPosts[i];

					var post: Model.Post = new Model.Post();
					post.title = obj.title;
					post.author = obj.author.nickname;
					post.authorUrl = obj.author.URL;
					post.content = obj.content;
					this.posts.push(post);
				}
			});
		}
	}

	angular.module('MidnightLight')
		.controller('MidnightLight.Controllers.PostsController', PostsController);

}