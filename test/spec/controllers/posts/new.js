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
});
