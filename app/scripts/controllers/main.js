'use strict';

/**
 * @ngdoc function
 * @name cloudfleetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cloudfleetApp
 */
angular.module('cloudfleetApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }).directive('mainHeader', function($timeout) {
    return {
        restrict: 'A',
		replace:true,
		templateUrl: 'views/header.html',
		link: function(scope, element, attrs){
			$timeout(function(){
				angular.element('#mainHeader a.page-scroll').bind('click', function (event) {
					var $anchor = $(this);
					//alert($($anchor.attr('id')));
					angular.element('html, body').stop().animate({
						scrollTop: ($($anchor.attr('href')).offset().top) - 65
					}, 1500, 'easeInOutExpo');
					event.preventDefault();
				});
			},500);
		}
    };
}).directive('mainSolution', function($timeout) {
    return {
        restrict: 'A',
		replace:true,
		templateUrl: 'views/solution.html', 
        link: function(scope, element, attrs) {
				$timeout(function(){
					angular.element("#solution .animated").waypoint(function (direction) {
						
						var el = angular.element(this),
							e = el.data("effect"),
							startTime = el.data("start");
						
						if (startTime) {
							setTimeout(function () {
								el.toggleClass(e);
								el.toggleClass("showing");
							}, startTime);
						} else {
							$(this).toggleClass(e);
							$(this).toggleClass("showing");
						}
					}, {
						offset: "90%"
					});
				},500);
        }
    };
}).directive('mainFeatures', function() {
    return {
        restrict: 'A',
		replace:true,
		templateUrl: 'views/features.html', 
        link: function(scope, element, attrs) {
			angular.element("#mainFeature .animated").waypoint(function (direction) {
					
					var el = $(this),
						e = el.data("effect"),
						startTime = el.data("start");
					
					if (startTime) {
						setTimeout(function () {
							el.toggleClass(e);
							el.toggleClass("showing");
						}, startTime);
					} else {
						$(this).toggleClass(e);
						$(this).toggleClass("showing");
					}
				}, {
					offset: "90%"
				});
        }
    };
}).directive('mainTeam', function() {
    return {
        restrict: 'A',
		replace:true,
		templateUrl: 'views/team.html', 
        link: function(scope, element, attrs) {
			angular.element('#team-tabs a').click(function(event){
				event.preventDefault();
			})
			angular.element("#mainTeam .animated").waypoint(function (direction) {
					
					var el = $(this),
						e = el.data("effect"),
						startTime = el.data("start");
					
					if (startTime) {
						setTimeout(function () {
							el.toggleClass(e);
							el.toggleClass("showing");
						}, startTime);
					} else {
						$(this).toggleClass(e);
						$(this).toggleClass("showing");
					}
				}, {
					offset: "90%"
				});
        }
    };
}).directive('mainFooter', function() {
    return {
        restrict: 'A',
		replace:true,
		templateUrl: 'views/footer.html', 
        link: function(scope, element, attrs) {

			angular.element("#footer .animated").waypoint(function (direction) {
					
					var el = $(this),
						e = el.data("effect"),
						startTime = el.data("start");
					
					if (startTime) {
						setTimeout(function () {
							el.toggleClass(e);
							el.toggleClass("showing");
						}, startTime);
					} else {
						$(this).toggleClass(e);
						$(this).toggleClass("showing");
					}
				}, {
					offset: "90%"
				});
        }
    };
});
  
 
