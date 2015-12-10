'use strict';

/**
 * @ngdoc function
 * @name cloudfleetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cloudfleetApp
 */
angular.module('cloudfleetApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
