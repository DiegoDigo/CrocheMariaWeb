'use strict'
angular.module("crocheMaria").factory("produtoFactory", function($http, config, $q){
      var url = config.host + "gelinho/";

      return {
          listar: function(){
            var promessa = $q.defer();
            $http.get(url +'sabores/').then(function(result){
              var dados = [];
              angular.forEach(result.data , function(dado){
                dados.push(dado);
              });
              promessa.resolve(dados);
            });
            return promessa.promise;
          },

          buscar : function(id){
            return $http.get(url +"sabor/"+id+"/");
          }
      }


});
