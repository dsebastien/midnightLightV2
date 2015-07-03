///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

//'use strict'; // todo put back strict mode once TypeScript 1.5 final is available: https://github.com/Microsoft/TypeScript/issues/3251#issuecomment-104669769

import {Http, Inject, Response} from 'angular2/angular2'; // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724
import * as Rx from 'rx';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Page} from 'components/pages/pages.model';

// todo add a method to retrieve the page content
// (or make it a bool switch on fetchPages)
// two use cases:
// menu creation: no content
// actual page display: content =)
export interface PagesService {
	fetchPages(): Rx.Observable<Page>;
}

/**
 * Service responsible for retrieving the blog pages (i.e., pages defined in Wordpress)
 */
export class PagesServiceImpl implements PagesService {
	private http: Http;

	constructor( @Inject(Http) http: Http) { // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724
		console.log('Loading the Pages service');
		this.http = http;
	}

	/**
	 * Fetch all blog pages.
	 * @returns {Rx.Observable<Page>}
	 */
	fetchPages(): Rx.Observable<Page> {
		var retVal: Rx.Subject<Page> = new Rx.Subject<Page>();

		var observable: Rx.Observable<any> = this.http.get(Configuration.applicationUrlWpApi + '/pages?filter[type]=page').toRx();

		observable.map(
			(response: Response) => response.json()
			).subscribe(
				(pagesJson: any) => {
					for (var i = 0; i < pagesJson.length; i++) {
						var obj = pagesJson[i];

						var page: Page = new Page();
						page.title = obj.title;

						retVal.onNext(page);
					}
					console.debug(`Found ${pagesJson.length} pages`);
					retVal.onCompleted();
				}
				);

		return retVal.asObservable();
	}
}
