"use strict";

import {Injectable} from "angular2/angular2"; // todo remove @Inject when that is fixed: https://github.com/angular/angular/issues/2788#issuecomment-117350724
import {Http, Response, HTTP_BINDINGS} from "angular2/http";
import * as Rx from "@reactivex/rxjs";

import {Configuration} from "../../core/commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Page} from "./pages.model";

// todo add a method to retrieve the page content
// (or make it a bool switch on fetchPages)

/**
 * Service responsible for retrieving the blog pages (i.e., pages defined in Wordpress).
 */
@Injectable()
export class PagesService {
	private http: Http;

	constructor(http: Http) {
		console.log("Loading the Pages service");
		this.http = http;
	}

	/**
	 * Fetch all blog pages (always issues a request & caches the results).
	 * @returns {Rx.Observable<Page>}
	 */
	fetchPages(): Rx.Observable<Page> {
		let retVal: Rx.Subject<Page> = new Rx.ReplaySubject<Page>();

		let observable: Rx.Observable<any> = this.http.get(Configuration.applicationUrlWpApi + "/pages?filter[type]=page"); // todo filter the post contents in the WS call (not possible now)

		observable.map(
			(response: Response) => response.json()
		).subscribe(
			(pagesJson: any) => {
				for (let i = 0; i < pagesJson.length; i++) {
					let obj = pagesJson[i];

					let page: Page = new Page();
					page.id = obj.ID;
					page.title = obj.title;
					page.content = obj.content; // TODO remove once filtered
					retVal.next(page);
				}
				console.debug(`Found ${pagesJson.length} pages`);
				retVal.complete();
			}
		);

		return retVal;
	}

	/**
	 * Fetch a page along with its contents
	 * @param id the id of the page to retrieve
	 * @returns {Page|T}
	 */
	fetchPage(id: string): Rx.Observable<Page> {
		// todo improve, handle case where no match & case where >1 match
		// todo improve, use cache posts & have a "isReady" observable
		let retVal: Rx.Subject<Page> = new Rx.Subject<Page>();
		let observable: Rx.Observable<any> = this.http.get(Configuration.applicationUrlWpApi + "/pages?filter[type]=page&filter[ID]="+name).toRx();

		observable.map(
			(response: Response) => response.json()
		).subscribe(
			(pageJson: any) => {
				let page: Page = new Page();
				page.id = pageJson.ID;
				page.title = pageJson.title;
				page.content = pageJson.content; // TODO remove once filtered
				retVal.next(page);
				console.debug(`Loaded the ${page.title} page`);
				retVal.complete();
			}
		);

		return retVal;
	}
}
