///<reference path="../../../ts-typings/tsd.d.ts" />
///<reference path="../../../ts-typings/typescriptApp.d.ts" />

'use strict';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
//import {Inject} from 'angular2/di';

export class PostsService{
	constructor(){
		
	}
	
	//TODO implement
}

/*
	import Configuration = MidnightLight.Core.Commons.Configuration;

	export class PostsService {
		static $inject = ['$http'];

		constructor(private $http: ng.IHttpService) {
		}

		getPosts(): ng.IHttpPromise<Array<{}>> {
			return this.$http.get(Configuration.applicationUrlWpApi + '/posts?filter[posts_per_page]=2&withoutcomments');
		}
	}

	angular.module(Configuration.applicationName)
		.service(PostsService.UID, PostsService);
*/
