///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

import {Component, Http, httpInjectables} from "angular2/angular2";

import * as Rx from 'rx';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss

@Component({
	appInjector: [httpInjectables]
})
export class PostsService{
	private http: Http;
	
	//constructor(){
	constructor(http: Http){
		console.log('Loading the Posts service');
		this.http = http;
	}

	//TODO implement
	fetchPosts(): Rx.Observable<any>{ // todo set correct type
		return this.http.get(Configuration.applicationUrlWpApi + '/posts?filter[posts_per_page]=2&withoutcomments');
		/*
		 Rx.Observable<any>
		return Rx.Observable
			.interval(4000)
		.flatMap(() => this.http.get(Configuration.applicationUrlWpApi + '/posts?filter[posts_per_page]=2&withoutcomments'));
		*/
	}
}
