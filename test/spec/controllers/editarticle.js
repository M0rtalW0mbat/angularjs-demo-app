'use strict';

describe('Controller: EditArticleCtrl', function () {

  // load the controller's module
  beforeEach(module('myArticleApp'));

  var EditArticleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditArticleCtrl = $controller('EditArticleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditArticleCtrl.awesomeThings.length).toBe(3);
  });
});
