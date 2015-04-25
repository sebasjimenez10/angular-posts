'use strict';

/**
 * @ngdoc overview
 * @name angularBlogApp
 * @description
 * # angularBlogApp
 *
 * Main module of the application.
 */
 angular
 .module('angularBlogApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'LocalStorageModule'  
  ])
 .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/posts', {
    templateUrl: 'views/posts.html',
    controller: 'PostsCtrl'
  })
  .when('/posts/new', {
    templateUrl: 'views/posts/new.html',
    controller: 'PostsNewCtrl'
  })
  .otherwise({
    templateUrl: '/404.html'
  });
});
