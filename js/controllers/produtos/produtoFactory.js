angular.module("crocheMaria").factory("produtoFactory", function($http, config){
      var url = config.host ;
      var dataFactory = {};

      dataFactory.getProdutos = function(){
        return $http.get(url + "gelinho/sabores/");
      }
      dataFactory.getProduto = function(id){
        return $http.get(url + "gelinho/sabor/"+id+"/");
      }

      return dataFactory;



});
