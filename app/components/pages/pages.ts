///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />
"format register"; // todo remove when the following issue is fixed: https://github.com/Microsoft/TypeScript/issues/3937
"use strict";

// import Angular 2
import {Component, View, CORE_DIRECTIVES} from "angular2/angular2";

import * as Rx from "@reactivex/rxjs";
import {RouterLink} from "angular2/router";

import {Configuration} from "core/commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Page} from "components/pages/pages.model";
import {PagesService} from "components/pages/pages.service";

@Component({
	selector: "navigation-menu", // todo rename to something clearer? menu? list? meeeeh
	viewBindings: [
		PagesService
	]
})
@View({
	templateUrl: "components/pages/pages.template.html",
	directives: [CORE_DIRECTIVES, RouterLink]
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
		let pagesObservableSubscription: Rx.IDisposable = pagesObservable.subscribe(
			(page: Page) => {
				this._pages.push(page);
			},
			(error: any) => { // todo set correct type
				console.log(`An error occurred while retrieving the pages: ${error}`);
			},
			() => {
				console.log("Pages retrieval completed");
				pagesObservableSubscription.dispose();
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
