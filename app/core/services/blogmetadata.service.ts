"use strict";

import {Injectable} from "angular2/angular2";
import {Http, Response} from "angular2/http";
import * as Rx from "@reactivex/rxjs";

import {Configuration} from "../commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {BlogMetadata} from "./blogmetadata.model";

/**
 * Service responsible for fetching basic metadata of the Wordpress blog in the back-end.
 */
@Injectable()
export class BlogMetadataService {
	private http: Http;

	constructor(http: Http) {
		console.log("Loading the BlogMetadata service");
		this.http = http;
	}

	/**
	 * Fetches the blog metadata
	 * @returns {Observable<BlogMetadata>}
	 */
	fetchMetadata(): Rx.Observable<BlogMetadata> {
		//todo check if available in localStorage
		let retVal:Rx.Subject<BlogMetadata> = new Rx.ReplaySubject<BlogMetadata>();

		let observable:Rx.Observable<any> = this.http.get(Configuration.applicationUrlWpApi).toRx(); // the main endpoint returns the metadata we're after

		observable.map(
			(response:Response) => response.json()
		).subscribe(
			(metadataJson:any) => {
				let blogMetadata: BlogMetadata = new BlogMetadata();
				blogMetadata.title = metadataJson.title;
				blogMetadata.description = metadataJson.description;
				blogMetadata.url = metadataJson.URL;

				// push data down the pipe :)
				retVal.next(blogMetadata);
				retVal.complete();
			}
		);

		return retVal;
	}
}
