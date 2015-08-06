///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />
'format register'; // todo remove when the following issue is fixed: https://github.com/Microsoft/TypeScript/issues/3937
'use strict';

import {Configuration} from 'core/commons/configuration';

/**
 * Holds metadata about the blog (e.g., title, description, url, ...)
 */
export class BlogMetadata {
	private _title: string;
	private _description: string;
	private _url: string;

	constructor() {
		//
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
