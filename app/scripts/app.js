'use strict';

/**
 * @ngdoc overview
 * @name cloudfleetApp
 * @description
 * # cloudfleetApp
 *
 * Main module of the application.
 */
angular
    .module('cloudfleetApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'zumba.angular-waypoints'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/order', {
                templateUrl: 'views/order.html',
                controller: 'OrderCtrl'
            })
            .when('/technology', {
                templateUrl: 'views/technology.html',
                controller: 'TechnologyCtrl'
            })
            /*.when('/home', {
             templateUrl: 'views/home.html',
             controller: 'HomectrlCtrl',
             controllerAs: 'home'
             })
             .when('/about', {
             templateUrl: 'views/about.html',
             controller: 'AboutCtrl',
             controllerAs: 'about'
             })*/
            .otherwise({
                redirectTo: '/'
            });
    });
