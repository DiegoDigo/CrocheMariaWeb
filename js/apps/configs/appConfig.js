angular.module("crocheMaria").config(function($routeProvider,$locationProvider){
      $routeProvider
      .when('/',{
          templateUrl : 'views/home.html',
          controller : 'homeController',
          controllerAs :'home',
      })

      .when('/produtos',{
          templateUrl : 'views/produtos.html',
          controller : 'produtoController',
          controllerAs : 'produto',
      });

      // $locationProvider.html5Mode(true);
});
