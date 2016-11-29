'use strict'
angular.module("crocheMaria").controller("produtoDetalheController", function($routeParams){
    var vim = this;
    vim.id = $routeParams.id;
    vim.teste = [];

    var testeApi = function(){
      produtoService.get(vim.id).success(function(result){
        vim.teste = result;
      });
    };

    var init = function(){
      testeApi();
    };

    init();

});
