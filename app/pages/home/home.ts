"use strict";

// import Angular 2
import { Component, View } from "angular2/core";

import {Configuration} from "../../core/commons/configuration"; // http://stackoverflow.com/questions/29593126/typescript-1-5-es6-module-default-import-of-commonjs-export-d-ts-only-iss

@Component({
	selector: "page-home"
})
@View({
	templateUrl: "pages/home/home.template.html",
	directives: []
})
export class Home {

	constructor() {
		console.log("Loading the Home component");
	}
}
