'use strict'
angular.module("crocheMaria").service("produtoService", function($http){

  var _getTeste = function(){
    return $http.get("http://127.0.0.1:8080/v1/gelinho/sabores/");
  };
  var _get = function(id){
    return $http.get("http://127.0.0.1:8080/v1/gelinho/sabor/"+id+"/");
  };

  return {
    teste : _getTeste,
    get : _get
  }

});
