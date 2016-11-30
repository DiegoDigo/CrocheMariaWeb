'use strict'
angular.module("crocheMaria").controller("produtoDetalheController", function(produtoService , $routeParams){
    var vim = this;
    var id = $routeParams.id;
    vim.teste = [];


    var testeApi = function(){
      produtoService.get(id).success(function(result){
        vim.teste = result;
      });
    };

    var init = function(){
      testeApi();
    };

    init();

});
