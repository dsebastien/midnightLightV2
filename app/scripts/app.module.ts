///<reference path="../../ts-typings/tsd.d.ts" />
///<reference path="../../ts-typings/typescriptApp.d.ts" />

'use strict';

((): void => {
	//var querySelector = document.querySelector.bind(document);
	//var body = document.body;
	//var main = querySelector('main');
	var app = angular.module('MidnightLight', ['ngRoute', 'ngSanitize', 'ngAnimate']);

	app.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            controller: 'MidnightLight.PostsController',
            templateUrl: 'views/posts.html',
            controllerAs: 'controller'
        }
		);
    }]);

})();
