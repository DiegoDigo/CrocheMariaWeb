'use strict'
angular.module("crocheMaria").controller("produtoDetalheController", DetalheProduto);

DetalheProduto.$inject = ['produtoFactory' , '$routeParams'];

function DetalheProduto(produtoFactory , $routeParams){
  var vim = this;
  var id = $routeParams.id;
  vim.teste = [];

  var testeApi = function(){
    produtoFactory.buscar(id).then(function(response, status){
        vim.teste = response.data;
    }, function(error){
        vim.msg = "Não temos produtos cadastrado no momento";
    });
  };

  var init = function(){
    testeApi();
  };

  init();
}
