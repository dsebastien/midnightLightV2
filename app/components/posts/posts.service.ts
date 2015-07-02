///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

//'use strict'; // todo put back strict mode once TypeScript 1.5 final is available: https://github.com/Microsoft/TypeScript/issues/3251#issuecomment-104669769

import {Component, Http, Inject} from "angular2/angular2"; // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724

import * as Rx from 'rx';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss

// TODO refactor
export interface IPostsService{
	fetchPosts(): Rx.Observable<any>;
}

export class PostsService implements IPostsService{
	private http: Http;

	constructor(@Inject(Http) http: Http){ // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724
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
