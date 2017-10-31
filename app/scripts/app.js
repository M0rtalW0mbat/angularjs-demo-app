/**
 * @ngdoc overview
 * @name myArticleApp
 * @description
 * # myArticleApp
 *
 * Main module of the application.
 */
(function() {
    'use strict';

    angular
        .module('myArticleApp', [
            'ngAnimate',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])
        .config(configure);

    configure.$inject = ['$routeProvider', '$locationProvider'];

    function configure($routeProvider, $locationProvider) {
        // fix angularjs 1.6.x route prefix, more: https://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                templateUrl: 'views/articles.html',
                controller: 'ArticlesCtrl',
                controllerAs: 'vm'
            })
            .when('/create', {
                templateUrl: 'views/createArticle.html',
                controller: 'CreateArticleCtrl',
                controllerAs: 'vm'
            })
            .when('/edit/:Id', {
                templateUrl: 'views/editArticle.html',
                controller: 'EditArticleCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();