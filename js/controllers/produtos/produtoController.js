'use strict'
angular.module("crocheMaria").controller("produtoController", function(produtoService){
    var vim = this;
    vim.teste = [];

    var testeApi = function(){
      produtoService.teste().success(function(result){
        vim.teste = result;
      });
    };

    var init = function(){
      testeApi();
    };

    init();

});
