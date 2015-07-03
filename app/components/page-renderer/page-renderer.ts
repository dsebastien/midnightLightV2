///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

// import Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

import * as Rx from 'rx';

import {Page} from 'components/pages/pages.model';
import {PagesService, PagesServiceImpl} from 'components/pages/pages.service';

@Component({
	selector: 'render-page', // todo check if selector is mandatory given that it won't be used (if not mandatory, also remove from posts & home)
	viewInjector: [
		PagesServiceImpl //todo rename to PagesService -- assume that during testing the types won't matter (?)
	]
})
@View({
	templateUrl: 'components/page-renderer/page-renderer.template.html',
	directives: [coreDirectives]
})
// todo review/complete: depends on fixing the router link issue in the template!
export class PageRenderer {
	private pagesService: PagesService;

	pageToRender: Page; // to check: visibility: private ok?

	constructor(pagesService: PagesServiceImpl) { // fixme use the interface instead
		console.log('Loading the Page renderer component');
		this.pagesService = pagesService;

		// fixme how do we get the route param?
	}
}
