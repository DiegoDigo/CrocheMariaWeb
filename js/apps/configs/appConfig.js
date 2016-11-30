angular.module("crocheMaria").config(function($routeProvider,$locationProvider){

      // $locationProvider.html5Mode(true);

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
      })
      .when('/produtos/:id',{
          templateUrl : 'views/detalheprodutos.html',
          controller : 'produtoDetalheController',
          controllerAs : 'detalhe',
      })
      .when('/perfil',{
          templateUrl : 'views/perfil.html',
          controller : 'perfilController',
          controllerAs : 'perfil',
      })
      .otherwise({
          redirectTo: '/'
        });


});
