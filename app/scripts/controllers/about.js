'use strict';

/**
 * @ngdoc function
 * @name watts4000project02cweatherappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the watts4000project02cweatherappApp
 */
 angular.module('watts4000project02cweatherappApp')
 .controller('AboutCtrl', function ($scope, pics) {
   $scope.pics = pics.query();

   $scope.refreshPhotos = function(){
       $scope.pics = pics.query({
           title: $scope.title
       });
   };
 });
