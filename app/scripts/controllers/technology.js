'use strict';

/**
 * @ngdoc function
 * @name cloudfleetApp.controller:TechnologyCtrl
 * @description
 * # TechnologyCtrl
 * Controller of the cloudfleetApp
 */
angular.module('cloudfleetApp')
  .controller('technologyCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('technology controller');
  });
