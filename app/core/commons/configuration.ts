///<reference path="../../../typings/tsd.d.ts" />
///<reference path="../../../typings/typescriptApp.d.ts" />
'format register'; // todo remove when the following issue is fixed: https://github.com/Microsoft/TypeScript/issues/3937
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
