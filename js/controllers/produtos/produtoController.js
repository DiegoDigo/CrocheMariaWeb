'use strict'
angular.module("crocheMaria").controller("produtoController", function(produtoService){
    var vim = this;
    vim.teste = [];
    vim.title = "Nossos Produtos";
    vim.msg ="";

    var testeApi = function(){
      produtoService.teste().success(function(result){
        vim.teste = result;
        if(result.length === 0){
          vim.msg = "Não temos produtos cadastrado no momento";
        }
      });
    };

    var init = function(){
      testeApi();
    };

    init();

});
