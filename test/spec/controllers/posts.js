'use strict';

describe('Controller: PostsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBlogApp'));

  var PostsCtrl,
    scope,
    ls,
    timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, localStorageService, $timeout) {
    scope = $rootScope.$new();
    PostsCtrl = $controller('PostsCtrl', {
      $scope: scope
    });
    ls = localStorageService;
    timeout = $timeout;
  }));
  
  it('should have posts variable in the scope defined', function () {
    expect(scope.posts).toBeDefined();
  });

  it('should have editable variable set to false', function () {
    expect(scope.editable).toBeFalsy();
  });

  it('should have showAlert variable set to false', function () {
    expect(scope.showAlert).toBeFalsy();
  });

  it('should have editingText variable set to Edit Posts', function () {
    expect(scope.editingText).toBe('Edit Posts');
  });

  it('should have removePost function defined', function () {
    expect(scope.removePost).toBeDefined();
  });

  it('should remove post when removePost function is called', function () {

    var post = {
      title: 'title',
      body: 'body'
    };

    scope.posts.push(post);
    scope.removePost(0);

    expect(scope.posts.length).toBe(0);
    expect(scope.showAlert).toBeTruthy();

    timeout.flush();

    expect(scope.showAlert).toBeFalsy();

  });

  it('should have toggleEditable function defined', function () {
    expect(scope.toggleEditable).toBeDefined();
  });

  it('should set editable to true and editingText to Editing Posts... when editable is false', function () {
    scope.editable = false;

    scope.toggleEditable();

    expect(scope.editable).toBeTruthy();
    expect(scope.editingText).toBe('Editing Posts...');

  });

  it('should set editable to false and editingText to Edit Posts when editable is true', function () {
    scope.editable = true;

    scope.toggleEditable();

    expect(scope.editable).toBeFalsy();
    expect(scope.editingText).toBe('Edit Posts');

  });

});
