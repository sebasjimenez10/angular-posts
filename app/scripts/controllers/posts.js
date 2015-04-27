'use strict';

/**
 * @ngdoc function
 * @name angularBlogApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angularBlogApp
 */
 angular.module('angularBlogApp')
 .controller('PostsCtrl', function ($scope, localStorageService, $timeout) {

  var postsInStore = localStorageService.get('posts');
  
  $scope.posts = postsInStore || [];
  $scope.editable = false;
  $scope.showAlert = false;
  $scope.editingText = 'Edit Posts';

  $scope.$watch('posts', function () {
    localStorageService.set('posts', $scope.posts);
  }, true );

  $scope.removePost = function (index) {
  	$scope.posts.splice(index, 1);
    $scope.showAlert = true;

    $timeout(function () {
      $scope.showAlert = false;
    }, 2500);
  };

  $scope.toggleEditable = function () {
  	if ($scope.editable) {
  		$scope.editable = false;
      $scope.editingText = 'Edit Posts';
    }else{
      $scope.editable = true;
      $scope.editingText = 'Editing Posts...';
    }
  };

});
