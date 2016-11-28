angular.module("crocheMaria").config(function($routeProvider,$locationProvider){
      $locationProvider.html5Mode(true);
      $routeProvider

      .when('/',{
          url: '/home',
          templateUrl : 'views/home.html',
          controller : 'homeController',
      })
});
