'use strict'
angular.module("crocheMaria").controller("produtoController", Produto);

Produto.$inject = ['produtoFactory'];

function Produto(produtoFactory){
  var vim = this;
  vim.teste = [];
  vim.title = "Nossos Produtos";
  vim.msg ="";

  var testeApi = function(){
    produtoFactory.listar().then(function(teste){
      vim.teste = teste;
      if(vim.teste.length === 0){
        vim.msg = "Não temos produtos cadastrado no momento";
      }
    },function(error){
      vim.msg = "Ocorreu o erro " + error.message ;
    });
  };

  var init = function(){
    testeApi();
  };

  init();
}
