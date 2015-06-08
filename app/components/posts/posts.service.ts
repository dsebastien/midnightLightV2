///<reference path="../../../ts-typings/tsd.d.ts" />
///<reference path="../../../ts-typings/typescriptApp.d.ts" />

module MidnightLight.Posts.Services {
	'use strict';

	import Configuration = MidnightLight.Core.Commons.Configuration;

	export class PostsService {
		static UID : string = 'posts.services.PostsService';
		static $inject = ['$http'];

		constructor(private $http: ng.IHttpService) {
		}

		getPosts(): ng.IHttpPromise<Array<{}>> {
			return this.$http.get(Configuration.applicationUrlWpApi + '/posts?filter[posts_per_page]=2&withoutcomments');
		}
	}

	angular.module(Configuration.applicationName)
		.service(PostsService.UID, PostsService);

}
