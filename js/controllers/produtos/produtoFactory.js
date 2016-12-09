'use strict'
angular.module("crocheMaria").factory("produtoFactory", ProdutoFactory);

ProdutoFactory.$inject = ['$http','config','$q'];

function ProdutoFactory($http,config , $q){

  var url = config.host;

  return {
      listar: function(){
        var promessa = $q.defer();
        $http.get(url +'produtos/').then(function(result){
          var dados = [];
          angular.forEach(result.data , function(dado){
            dados.push(dado);
          });
          promessa.resolve(dados);
        });
        return promessa.promise;
      },

      buscar : function(id){
        return $http.get(url +"produto/"+id+"/");
      },

      buscarPorCategoria : function(id){
        return $http.get(url +"produto/categoria/"+id+"/");
      }
  }
}
