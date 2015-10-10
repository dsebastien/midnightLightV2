///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />
"format register"; // todo remove when the following issue is fixed: https://github.com/Microsoft/TypeScript/issues/3937
"use strict";

// import Angular 2
import { Component, View, CORE_DIRECTIVES } from "angular2/angular2";

import {Configuration} from "core/commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss

@Component({
	selector: "page-home"
})
@View({
	templateUrl: "pages/home/home.template.html",
	directives: [CORE_DIRECTIVES]
})
export class Home {

	constructor() {
		console.log("Loading the Home component");
	}
}
