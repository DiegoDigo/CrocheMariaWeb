'use strict'
angular.module("crocheMaria").controller("produtoCategoriaController", ProdutoCategoria);

ProdutoCategoria.$inject = ['produtoFactory','$routeParams'];

function ProdutoCategoria(produtoFactory,$routeParams){
  var vim = this;
  var categoria = $routeParams.categoria;
  vim.produtos = [];
  vim.title = "Nossos Produtos";
  vim.msg ="";

  var carregarProdutosPorCategoria = function(){
    produtoFactory.buscarPorCategoria(categoria).then(function(produtos){
      vim.produtos = produtos.data;
      if(produtos.status === 0){
        vim.msg = "Desculpe nos estamos fora de serviço em breve voltaremos";
      }
      if(vim.produtos.length === 0){
        vim.msg = "Não temos produtos cadastrado para essa categoria";
      }
    },function(error){
      vim.msg = "Ocorreu o erro " + error.message ;
    });
  };

  var init = function(){
    carregarProdutosPorCategoria();
  };

  init();
}
