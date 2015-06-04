///<reference path="../../../../ts-typings/tsd.d.ts" />
///<reference path="../../../../ts-typings/typescriptApp.d.ts" />

module MidnightLight.Controllers {
	'use strict';

	export class MainController {
		static UID : string = 'MainController';
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

	angular.module('MidnightLight')
		.controller(MainController.UID, MainController);
}
