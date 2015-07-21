///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />
'format register'; // todo remove when the following issue is fixed: https://github.com/Microsoft/TypeScript/issues/3937
'use strict';

import {Http, Inject, Response} from 'angular2/angular2'; // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724
import * as Rx from 'rx';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Post} from 'components/posts/posts.model';

/**
 * Service responsible for retrieving the blog posts
 */
export class PostsService {
	private http: Http;

	constructor(@Inject(Http) http: Http) { // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724
		console.log('Loading the Posts service');
		this.http = http;
	}

	/**
	 * Fetch the most recent blog posts.
	 * @returns {Rx.Observable<Post>}
	 */
	fetchPosts(): Rx.Observable<Post> {
		// example Rx.Observable usage: https://jsbin.com/dosumoqexe/edit?js,console
		// reference about subject: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md
		var retVal:Rx.Subject<Post> = new Rx.Subject<Post>();

		// TODO configure API calls (posts to retrieve etc)
		var observable:Rx.Observable<any> = this.http.get(Configuration.applicationUrlWpApi + '/posts?filter[posts_per_page]=2&withoutcomments').toRx();
		observable.map(
			(response:Response) => response.json()
		).subscribe(
			(postsJson:any) => {
				for (var i = 0 ; i < postsJson.length ; i++) {
					var obj = postsJson[i];

					var post:Post = new Post();
					post.title = obj.title;
					post.author = obj.author.nickname;
					post.authorUrl = obj.author.URL;
					post.content = obj.content;

					retVal.onNext(post);
				}
				console.debug(`Found ${postsJson.length} posts`);
				retVal.onCompleted();
			}
		);

		return retVal.asObservable();
	}
}
