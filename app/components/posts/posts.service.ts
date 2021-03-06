"use strict";

import {Injectable} from "angular2/core"; // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724
import {Http, Response} from "angular2/http";
import {Observable, Subject, ReplaySubject} from "rxjs";

import {Configuration} from "../../core/commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Post} from "./posts.model";

/**
 * Service responsible for retrieving the blog posts
 */
@Injectable()
export class PostsService {
	private http: Http;

	constructor(http: Http) { // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724
		console.log("Loading the Posts service");
		this.http = http;
	}

	/**
	 * Fetch the most recent blog posts.
	 * @returns {Rx.Observable<Post>}
	 */
	fetchPosts(): Observable<Post> {
		// example Rx.Observable usage: https://jsbin.com/dosumoqexe/edit?js,console
		// reference about subject: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md
		let retVal:Subject<Post> = new ReplaySubject<Post>();

		// TODO configure API calls (posts to retrieve etc)
		// needs WP rest api update (currently doesn't allow for partial posts data retrieval)
		let observable:Observable<Response> = this.http.get(Configuration.applicationUrlWpApi + "/posts?filter[posts_per_page]=2&withoutcomments");
		observable.map(
			(response:Response) => response.json()
		).subscribe(
			(postsJson:any) => {
				for (let i = 0 ; i < postsJson.length ; i++) {
					let obj = postsJson[i];

					let post:Post = new Post();
					post.title = obj.title;
					post.author = obj.author.nickname;
					post.authorUrl = obj.author.URL;
					post.content = obj.content;
					retVal.next(post);
				}
				console.debug(`Found ${postsJson.length} posts`);
				retVal.complete();
			}
		);

		return retVal;
	}
}
