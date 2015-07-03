///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

//TODO use const (in TS 1.5??)
export class Configuration {
	static applicationName: string = 'MidnightLight';
	static applicationUrl: string = 'https://dsebastien.net';
	static applicationUrlWpApi: string = Configuration.applicationUrl + '/wp-json';
}
