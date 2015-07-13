///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

export class Page {
	private _id : string;
	private _title : string;
	private _content: string;

	get id(): string {
		return this._id;
	}

	set id(newId: string) {
		this._id = newId;
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
	
	toString(): string {
		return this._title;
	}
}
