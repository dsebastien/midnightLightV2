///<reference path="../../../ts-typings/tsd.d.ts" />
///<reference path="../../../ts-typings/typescriptApp.d.ts" />

((): void => {

	'use strict';

	//var querySelector = document.querySelector.bind(document);
	//var body = document.body;
	//var main = querySelector('main');
	var app = angular.module('MidnightLight', ['ngRoute', 'ngSanitize', 'ngAnimate']);

	app.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            controller: MidnightLight.Controllers.PostsController.UID,
            templateUrl: 'views/posts.html',
            controllerAs: 'controller'
        }
		);
    }]);
	
	// Helper function to mark HTML data as trusted in combination with ng-bind-html="value | unsafe"
	// Requires ngSanitize
	// Reference: http://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu
	app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

})();
