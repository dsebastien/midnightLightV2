"use strict";

// import Angular 2
import {Component, View} from "angular2/core";

import * as Rx from "rxjs";
import {ROUTER_DIRECTIVES, RouterLink} from "angular2/router";

import {Configuration} from "../../core/commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Page} from "../pages/pages.model";
import {PagesService} from "../pages/pages.service";

@Component({
	selector: "navigation-menu", // todo rename to something clearer? menu? list? meeeeh
	viewBindings: [
		PagesService
	]
})
@View({
	templateUrl: "components/pages/pages.template.html",
	directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class Pages {
	private pagesService: PagesService;

	/**
	 * The currently loaded pages
	 * @type {any[]}
	 */
	private _pages : Array<Page> = [];

	constructor(pagesService: PagesService) {
		console.log("Loading the Pages component");
		this.pagesService = pagesService;

		let pagesObservable: Rx.Observable<Page> = pagesService.fetchPages();

		let pagesObservableSubscription: Rx.Subscription<Page> = pagesObservable.subscribe(
			(page: Page) => {
				this._pages.push(page);
			},
			(error: any) => { // todo set correct type
				console.log(`An error occurred while retrieving the pages: ${error}`);
			},
			() => {
				console.log("Pages retrieval completed");
				pagesObservableSubscription.unsubscribe();
			});
	}

	/**
	 * Get all pages
	 * @returns {Array<Page>}
	 */
	get pages(): Array<Page> {
		return this._pages;
	}
}
