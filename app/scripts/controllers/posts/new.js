'use strict';

/**
 * @ngdoc function
 * @name angularBlogApp.controller:PostsNewCtrl
 * @description
 * # PostsNewCtrl
 * Controller of the angularBlogApp
 */
 angular.module('angularBlogApp')
 .controller('PostsNewCtrl', function ($scope, localStorageService, $timeout) {
  
  var postsInStore = localStorageService.get('posts') || [];

  $scope.showAlert = false;

  $scope.createPost = function () {
    postsInStore.unshift( $scope.post );
    localStorageService.set('posts', postsInStore);
    $scope.post = {};

    $scope.showAlert = true;

    $timeout(function () {
      $scope.showAlert = false;
    }, 2500);
  };

});
