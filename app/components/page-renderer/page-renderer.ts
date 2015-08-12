///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />
'format register'; // todo remove when the following issue is fixed: https://github.com/Microsoft/TypeScript/issues/3937
'use strict';

// import Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

import * as Rx from 'rx';

import {Page} from 'components/pages/pages.model';
import {PagesService} from 'components/pages/pages.service';

@Component({
	selector: 'render-page', // todo check if selector is mandatory given that it won't be used (if not mandatory, also remove from posts & home)
	viewBindings: [
		PagesService //todo rename to PagesService -- assume that during testing the types won't matter (?)
	]
})
@View({
	templateUrl: 'components/page-renderer/page-renderer.template.html',
	directives: [coreDirectives]
})
export class PageRenderer {
	private pageToRender: Page; // to check: visibility: private ok?

	constructor(pagesService: PagesService, routeParams: RouteParams) { // how to inject the route params
		console.log('Loading the Page renderer component');
		let pageToRender: string = routeParams.get('pageToRender'); //FIXME nok
		console.log(`Page to render: ${pageToRender}`);
		pagesService.fetchPage(pageToRender).subscribe(
			(page: Page) => {
				this.pageToRender = page;
			},
			(error: any) => { // todo set correct type
				console.log('An error occurred while retrieving the page to render',error);
			},
			() => {
				console.log('Page to render loaded');
			});
	}
}
