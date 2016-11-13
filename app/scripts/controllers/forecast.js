'use strict';

/**
 * @ngdoc function
 * @name watts4000project02cweatherappApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the watts4000project02cweatherappApp
 */
angular.module('watts4000project02cweatherappApp')
    .controller('ForecastCtrl', function ($scope, $routeParams, forecast, pics) {
      $scope.cityID = $routeParams.cityID;

      $scope.forecastData = forecast.query({
          cityID: $routeParams.cityID,
          lat: $scope.lat,
          lon: $scope.lon
      });


      ////////////////////////////////////////////
      $scope.forecast.$promise.then ();
      $scope.pics = pics.query();

      $scope.refreshPhotos = function(){
          $scope.pics = pics.query({
              title: $scope.title,
              lat: $scope.lat,
              lon: $scope.lon
          });
      };

      /////////////////////////////////////////////

    });
