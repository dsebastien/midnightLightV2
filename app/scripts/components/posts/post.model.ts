///<reference path="../../../../ts-typings/tsd.d.ts" />
///<reference path="../../../../ts-typings/typescriptApp.d.ts" />

module MidnightLight.Model {
	'use strict';

	export class Post {
		private _author : string;
		private _authorUrl: string;
		private _title : string;
		private _content : string;

		get author(): string {
			return this._author;
		}

		set author(newAuthor: string) {
			this._author = newAuthor;
		}

		get authorUrl(): string {
			return this._authorUrl;
		}

		set authorUrl(newAuthorUrl: string) {
			this._authorUrl = newAuthorUrl;
		}

		get title(): string {
			return this._title;
		}

		set title(newTitle: string) {
			this._title = newTitle;
		}

		get content(): string {
			return this._content;
		}

		set content(newContent: string) {
			this._content = newContent;
		}
	}
}
