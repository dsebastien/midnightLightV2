///<reference path="../../../ts-typings/tsd.d.ts" />
///<reference path="../../../ts-typings/typescriptApp.d.ts" />

module MidnightLight.Core.Commons {
	'use strict';

	export class Configuration {
		static applicationName: string = 'MidnightLight';
		static applicationUrl: string = 'http://dsebastien.net';
		static applicationUrlWpApi: string = Configuration.applicationUrl + '/wp-json';
	};
}
