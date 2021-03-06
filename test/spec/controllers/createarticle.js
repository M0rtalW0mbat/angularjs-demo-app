'use strict';

describe('Controller: CreateArticleCtrl', function () {

  // load the controller's module
  beforeEach(module('myArticleApp'));

  var CreateArticleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateArticleCtrl = $controller('CreateArticleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateArticleCtrl.awesomeThings.length).toBe(3);
  });
});
