///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

// import Angular 2
import { Component, View, coreDirectives } from 'angular2/angular2';

import {Configuration} from 'core/commons/configuration'; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss

@Component({
	selector: 'page-home'
})
@View({
	templateUrl: 'pages/home/home.template.html',
	directives: [coreDirectives]
})
export class Home {

	constructor() {
		console.log('Loading the Home component');
	}
}
