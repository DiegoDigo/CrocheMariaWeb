'use strict'
angular.module("crocheMaria").controller("produtoController", Produto);

Produto.$inject = ['produtoFactory'];

function Produto(produtoFactory){
  var vim = this;
  vim.produtos = [];
  vim.title = "Nossos Produtos";
  vim.msg ="";

  var carregarProdutos = function(){
    produtoFactory.listar().then(function(produtos){
      vim.produtos = produtos;
      if(produtos.status === 0){
        vim.msg = "Desculpe nos estamos fora de serviço em breve voltaremos";
      }
      if(vim.produtos.length === 0){
        vim.msg = "Não temos produtos cadastrado no momento";
      }
    },function(error){
      vim.msg = "Ocorreu o erro " + error.message ;
    });
  };

  var init = function(){
    carregarProdutos();
  };

  init();
}
