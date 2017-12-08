'use strict';

angular.module('myApp.movies', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movies', {
    templateUrl: 'modules/movieView/movieView.html',
    controller: 'movieCtrl'
  });
}])

  .controller('movieCtrl', function($scope, $http) {
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "jobs";

    function fetch() {
      $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&apikey=126132fe&tomatoes=true&plot=full")
        .then(function(response) {
          $scope.details = response.data;
        });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search + "&page=1&apikey=126132fe" )
        .then(function(response) {
          $scope.related = response.data;
        });
    }

    $scope.update = function(movie) {
      $scope.search = movie.Title;
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });



