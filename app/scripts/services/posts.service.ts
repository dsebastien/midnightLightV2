///<reference path="../../../ts-typings/tsd.d.ts" />
///<reference path="../../../ts-typings/typescriptApp.d.ts" />

module MidnightLight.Services {
	'use strict';

	export class PostsService {
		static UID : string = 'PostsService';
		static $inject = ['$http'];

		constructor(private $http: ng.IHttpService) {
		}

		getPosts(): ng.IHttpPromise<Array<{}>> {
			return this.$http.get('http://dsebastien.net/wp-json/posts?filter[posts_per_page]=10&withoutcomments');
		}
	}

	angular.module('MidnightLight')
		.service(PostsService.UID, PostsService);

}