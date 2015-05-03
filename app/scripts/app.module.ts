///<reference path="../../ts-typings/tsd.d.ts" />
///<reference path="../../ts-typings/typescriptApp.d.ts" />

((): void => {

	'use strict';

	//var querySelector = document.querySelector.bind(document);
	//var body = document.body;
	//var main = querySelector('main');
	var app = angular.module('MidnightLight', ['ngRoute', 'ngSanitize', 'ngAnimate']);

	app.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            controller: 'MidnightLight.Controllers.PostsController',
            templateUrl: 'views/posts.html',
            controllerAs: 'controller'
        }
		);
    }]);

})();
