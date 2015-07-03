///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

//'use strict'; // todo put back strict mode once TypeScript 1.5 final is available: https://github.com/Microsoft/TypeScript/issues/3251#issuecomment-104669769

import {Http, Response} from 'angular2/angular2'; // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724
import * as Rx from 'rx';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {BlogMetadata} from 'core/services/blogmetadata.model';

/**
 * Service responsible for fetching basic metadata of the Wordpress blog in the back-end.
 */
export class BlogMetadataService {
	private http: Http;

	constructor(http: Http) {
		console.log('Loading the BlogMetadata service');
		this.http = http;
	}

	/**
	 * Fetches the blog metadata
	 * @returns {Observable<BlogMetadata>}
	 */
	fetchMetadata(): Rx.Observable<BlogMetadata> {
		//todo check if available in localStorage
		var retVal:Rx.Subject<BlogMetadata> = new Rx.Subject<BlogMetadata>();

		var observable:Rx.Observable<any> = this.http.get(Configuration.applicationUrlWpApi).toRx(); // the main endpoint returns the metadata we're after

		observable.map(
			(response:Response) => response.json()
		).subscribe(
			(metadataJson:any) => {
				var blogMetadata: BlogMetadata = new BlogMetadata();
				blogMetadata.title = metadataJson.title;
				blogMetadata.description = metadataJson.description;
				blogMetadata.url = metadataJson.URL;

				// push data down the pipe :)
				retVal.onNext(blogMetadata);
				retVal.onCompleted();
			}
		);

		return retVal.asObservable();
	}
}
