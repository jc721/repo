'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	.when('/gallery', {
    templateUrl: 'modules/galleryView/galleryView.html',
    controller: 'galleryCtrl'
  })
 	.when('/photos/:id', {
 	  templateUrl: 'modules/galleryView//galleryDetailsView.html',
      controller: 'galleryDetailsCtrl'
    });
}])
/*
.controller('galleryCtrl', function($scope, $http) {
  $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
  .then(function(data) {
      $scope.photos = data.data;
  });
})*/

.controller('galleryCtrl', ['$scope', 'photoDetails', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
  
}])

.controller('galleryDetailsCtrl', ['$scope', 'photoDetails', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}])

.factory('photoDetails', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);