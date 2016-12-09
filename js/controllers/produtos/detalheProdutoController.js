'use strict'
angular.module("crocheMaria").controller("produtoDetalheController", DetalheProduto);

DetalheProduto.$inject = ['produtoFactory' , '$routeParams'];

function DetalheProduto(produtoFactory , $routeParams){
  var vim = this;
  var id = $routeParams.id;
  vim.produto = [];
  vim.msg = "";
  vim.curtida = 4;

  var carregarProduto = function(){
    produtoFactory.buscar(id).then(function(response){
      vim.produto = response.data;
    }, function(error){
        vim.msg = "Não temos produtos cadastrado no momento";
    });
  };

  vim.curti = function(){
    vim.curtida += 1;
  }

  var init = function(){
    carregarProduto();
  };

  init();
}
