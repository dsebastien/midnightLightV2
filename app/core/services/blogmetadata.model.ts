///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

import {Configuration} from 'core/commons/configuration';

/**
 * Holds metadata about the blog (e.g., title, description, url, ...)
 */
export class BlogMetadata {
	private _title: string;
	private _description: string;
	private _url: string;
	
	constructor(){ 
		// default to mine.. :)
		this.title = Configuration.applicationName;
		this._description = Configuration.applicationDescription;
		this._url = Configuration.applicationUrl;
	}

	get title(): string {
		return this._title;
	}

	set title(newTitle: string) {
		this._title = newTitle;
	}

	get description(): string {
		return this._description;
	}

	set description(newDescription: string) {
		this._description = newDescription;
	}

	get url(): string {
		return this._url;
	}

	set url(newUrl: string) {
		this._url = newUrl;
	}
}
