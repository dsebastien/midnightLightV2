"use strict";

import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable, Subject, ReplaySubject} from "rxjs";

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
	fetchMetadata(): Observable<BlogMetadata> {
		//todo check if available in localStorage
		let retVal:Subject<BlogMetadata> = new ReplaySubject<BlogMetadata>();

		let observable:Observable<Response> = this.http.get(Configuration.applicationUrlWpApi); // the main endpoint returns the metadata we're after

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
