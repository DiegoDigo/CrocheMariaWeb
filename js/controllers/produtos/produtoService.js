'use strict'
angular.module("crocheMaria").service("produtoService", function($http){

  var _getTeste = function(){
    return $http.get("http://127.0.0.1:8080/v1/gelinho/sabores/");
  };

  return {
    teste : _getTeste
  }

});
