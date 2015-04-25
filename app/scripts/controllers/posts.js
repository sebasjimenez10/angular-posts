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

  });
