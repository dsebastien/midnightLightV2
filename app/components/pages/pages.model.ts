"use strict";

export class Page {
	private _id : string = ""; // todo remove default value once Angular2 correctly displays null/undefined: https://github.com/angular/angular/issues/3007
	private _title : string = ""; // todo remove default value once Angular2 correctly displays null/undefined: https://github.com/angular/angular/issues/3007
	private _content: string = ""; // todo remove default value once Angular2 correctly displays null/undefined: https://github.com/angular/angular/issues/3007

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
