'use strict';

/**
 * @ngdoc service
 * @name watts4000project02cweatherappApp.pics
 * @description
 * # pics
 * Factory in the watts4000project02cweatherappApp.
 */
 angular.module('watts4000project02cweatherappApp')
   .factory('pics', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=35edbca3494716bac72f7f2719ccb167&tags=:tags&tag_mode=any&text=skyline&sort=relevance&lat=:lat&lon=:lon&radius=2&extras=url_l&format=json&nojsoncallback=1', {}, {
       query: {
         method:'GET',
         params:{
           lat: '41.8781',
           lon: '-87.6298',
           tags: 'Sunny'
         },
         isArray:false
       }
     });
   });
