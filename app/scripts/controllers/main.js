'use strict';

/**
 * @ngdoc function
 * @name watts4000project02cweatherappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watts4000project02cweatherappApp
 */

angular.module('watts4000project02cweatherappApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };
  });
