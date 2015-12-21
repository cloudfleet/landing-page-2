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

    // TODO: rewrite this whole function using Angular logic
    $scope.cloudfleetSendOrder = function(){
      var getFormData = function(dom_query){
        var out = {};
        var s_data = $(dom_query).serializeArray();
        //transform into simple data/value object
        for(var i = 0; i<s_data.length; i++){
            var record = s_data[i];
            out[record.name] = record.value;
        }
        return out;
      }

      var data = getFormData('#order-form');
      var api_base = 'https://spire.cloudfleet.io';
      //var api_base = 'http://localhost:8000';
      $.post(api_base + '/api/v1/blimp', JSON.stringify(data), function(){
        console.debug('order sent!');
        window.location.replace("/"); // TODO: success page
      }).fail(function(errorData) {
        console.error(errorData);
      });
    }


  });
