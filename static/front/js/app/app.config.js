'use strict';

angular.module('rudra').
    config(
        function(
          $locationProvider,
          $resourceProvider,
          $routeProvider
          ){

          $locationProvider.html5Mode({
              enabled:true
            })

          $resourceProvider.defaults.stripTrailingSlashes = false;

          $routeProvider.
              when("/", {
                template: "Home"
              }).
              otherwise({
                  template: "Not Found"
              })

    });