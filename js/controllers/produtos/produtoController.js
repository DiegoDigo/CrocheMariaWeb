'use strict'
angular.module("crocheMaria").controller("produtoController", function(produtoFactory){
    var vim = this;
    vim.teste = [];
    vim.title = "Nossos Produtos";
    vim.msg ="";

    var testeApi = function(){
      produtoFactory.getProdutos().then(function(respose){
        vim.teste = respose.data;
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

});
