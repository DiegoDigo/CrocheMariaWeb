angular.module("crocheMaria").config(Config);

Config.$inject = ['$routeProvider','$locationProvider'];

function Config($routeProvider,$locationProvider){
  // $locationProvider.html5Mode({
  //    enabled: true,
  //    requireBase: false
  //  });


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
      templateUrl : 'views/detalheproduto.html',
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
}
