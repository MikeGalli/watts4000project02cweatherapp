'use strict';

/**
 * @ngdoc overview
 * @name watts4000project02cweatherappApp
 * @description
 * # watts4000project02cweatherappApp
 *
 * Main module of the application.
 */
angular
  .module('watts4000project02cweatherappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage', // added to enable localStorage features
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/current/:cityID', {
          templateUrl: 'views/current.html',
          controller: 'CurrentCtrl',
          controllerAs: 'current'
      })
      .when('/current', {
        templateUrl: 'views/current.html',
        controller: 'CurrentCtrl',
        controllerAs: 'current'
      })
      .when('/forecast/:cityID', {
          templateUrl: 'views/forecast.html',
          controller: 'ForecastCtrl',
          controllerAs: 'forecast'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
