'use strict';

/**
 * @ngdoc function
 * @name angularBlogApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angularBlogApp
 */
 angular.module('angularBlogApp')
 .controller('PostsCtrl', function ($scope, localStorageService) {

  var postsInStore = localStorageService.get('posts');
  $scope.posts = postsInStore || [];

  $scope.editable = false;

  $scope.$watch('posts', function () {
        localStorageService.set('posts', $scope.posts);
    }, true );

  $scope.removePost = function (index) {
  	$scope.posts.splice(index, 1);
  };

  $scope.toggleEditable = function () {
  	if ($scope.editable) {
  		$scope.editable = false;
  	}else{
  		$scope.editable = true;

  	}
  };

});
