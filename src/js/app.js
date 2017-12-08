'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.gallery',
  'myApp.movies',
  'myApp.comics',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider
  	.when("/gallery", {
        templateUrl : "modules/galleryView/galleryView.html"
    })
    .when("/movies", {
        templateUrl : "modules/movieView/movieView.html"
    })
    .when("/comics", {
        templateUrl : "modules/comicView/comicView.html"
    })
  	.otherwise({redirectTo: '/comics'});
}]);

