'use strict';

/**
 * @ngdoc function
 * @name cloudfleetApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the cloudfleetApp
 */
angular.module('cloudfleetApp')
  .controller('OrderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('order controller');
  });
