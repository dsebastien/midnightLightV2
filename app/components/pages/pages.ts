///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

// import Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

import * as Rx from 'rx';
import {RouterLink} from 'angular2/router';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss
import {Page} from 'components/pages/pages.model';
import {PagesService, PagesServiceImpl} from 'components/pages/pages.service';

@Component({
	selector: 'pages', // todo rename to something clearer? menu? list? meeeeh
	viewInjector: [
		PagesServiceImpl //todo rename to PagesService -- assume that during testing the types won't matter (?)
	]
})
@View({
	templateUrl: 'components/pages/pages.template.html',
	directives: [coreDirectives, RouterLink]
})
export class Pages {
	private pagesService: PagesService;

	/**
	 * The currently loaded pages
	 * @type {any[]}
	 */
	private pages : Array<Page> = [];
	
	constructor(pagesService: PagesServiceImpl) { // fixme use the interface instead
		console.log('Loading the Pages component');
		this.pagesService = pagesService;
		
		pagesService.fetchPages().subscribe(
			(page: Page) => {
				this.pages.push(page);
			},
			(error: any) => { // todo set correct type
				console.log(`An error occurred while retrieving the pages: ${error}`);
			},
			() => {
				console.log('Pages retrieval completed');
			});
	}
}
