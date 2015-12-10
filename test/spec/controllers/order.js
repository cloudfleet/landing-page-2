'use strict';

describe('Controller: OrderctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudfleetApp'));

  var OrderctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderctrlCtrl = $controller('OrderctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
