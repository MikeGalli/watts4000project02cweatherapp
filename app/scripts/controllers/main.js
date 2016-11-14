'use strict';

/**
 * @ngdoc function
 * @name watts4000project02cweatherappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watts4000project02cweatherappApp
 */
//var citiesFound = "";


angular.module('watts4000project02cweatherappApp')
.controller('MainCtrl', function ($scope, citysearch, $localStorage) {
  $scope.citiesFound = citysearch.find();
  $scope.storage = $localStorage;

  $scope.findCities = function(){
      $scope.citiesFound = citysearch.find({
          query: $scope.location
      });
      $scope.searchQuery = $scope.location;
  };

});
