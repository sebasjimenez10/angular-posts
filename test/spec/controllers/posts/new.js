'use strict';

describe('Controller: PostsNewCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBlogApp'));

  var PostsNewCtrl,
    scope,
    ls,
    timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, localStorageService, $timeout) {
    scope = $rootScope.$new();
    PostsNewCtrl = $controller('PostsNewCtrl', {
      $scope: scope
    });
    ls = localStorageService;
    timeout = $timeout;

  }));

  it('should have localStorageService defined', function () {
    expect(ls).toBeDefined();
  });

  it('should have showAlert value starting with false', function () {
    expect(scope.showAlert).toBeFalsy();
  });

  it('should have createPost function defined', function () {
    expect(scope.createPost).toBeDefined();
  });

  it('should create post after createPost function is called', function () {
    scope.post = {
      title: 'test post title',
      body:  'test post body'
    };

    spyOn(ls, 'get').and.callFake(function () {
      return [ scope.post ];
    });

    scope.createPost();

    var posts = ls.get('posts');

    expect(posts).toBeDefined();
    expect(posts.length).toBeGreaterThan(0);

    expect(scope.post.title).toBeUndefined();
    expect(scope.post.body).toBeUndefined();

    expect(scope.showAlert).toBeTruthy();

    timeout.flush();

    expect(scope.showAlert).toBeFalsy();

  });

});
