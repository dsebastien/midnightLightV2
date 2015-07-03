///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />

'use strict';

//TODO use const (in TS 1.5??)
/**
 * Main configuration settings
 */
export class Configuration {
	// todo remove once the BlogMetadata service is implemented
	static applicationName: string = 'MidnightLight';
	static applicationDescription: string = 'A blog about software development, photography, electronics, guitar and all those other things that I love.';
	static applicationUrl: string = 'https://dsebastien.net';
	static applicationUrlWpApi: string = Configuration.applicationUrl + '/wp-json';
}
