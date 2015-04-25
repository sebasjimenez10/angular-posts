'use strict';

describe('Controller: PostsNewCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBlogApp'));

  var PostsNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsNewCtrl = $controller('PostsNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
