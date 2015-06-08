///<reference path="../../../ts-typings/tsd.d.ts" />
///<reference path="../../../ts-typings/typescriptApp.d.ts" />

module MidnightLight.Core.Controllers {
	'use strict';

	import Configuration = MidnightLight.Core.Commons.Configuration;

	export class MainController {
		static UID : string = 'core.controllers.MainController'; // unrestricted name as this is NOT a component
		static $inject = ['$router']; // Angular-way to inject dependencies

		constructor(private $router) {
			console.log(`Loading the ${MainController.UID} controller`);
			// This is the configuration of the router
			$router.config([
				{ path: '/', redirectTo: '/posts' },
				{ path: '/posts', component: 'posts' }
			]);
		}
	}

	angular.module(Configuration.applicationName)
		.controller(MainController.UID, MainController);
}
