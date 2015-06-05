///<reference path="../../ts-typings/tsd.d.ts" />
///<reference path="../../ts-typings/typescriptApp.d.ts" />

((): void => {
	'use strict';

	//var querySelector = document.querySelector.bind(document);
	//var body = document.body;
	//var main = querySelector('#main');

	var app = angular.module('MidnightLight', ['ngNewRouter', 'ngSanitize', 'ngAnimate']);

	// controllers register themselves once they're loaded through index.html

	// customization of the component loader
	// reference: http://chariotsolutions.com/blog/post/new-angular-router-naming-conventions/
	function dashCase(str) {
		return str.replace(/([A-Z])/g, function ($1) {
			return '-' + $1.toLowerCase();
		});
	}

	app.config(['$componentLoaderProvider', function($componentLoaderProvider){
		$componentLoaderProvider.setTemplateMapping(function (name) {
			var dashName = dashCase(name);
			// customized to a different base path
			return './components/' + dashName + '/' + dashName + '.template.html';
		});
	}]);

	// Helper function to mark HTML data as trusted in combination with ng-bind-html="value | unsafe"
	// Requires ngSanitize
	// Reference: http://stackoverflow.com/questions/18340872/how-do-you-use-sce-trustashtmlstring-to-replicate-ng-bind-html-unsafe-in-angu
	app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
})();
