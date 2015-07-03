///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

export class Page {
	private _title : string;
	private _content: string;

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

	//todo toString method? Way to do it in TS??
}
