//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

sampleApp.factory('candidatsService', function($rootScope, $http) {
    var candidatsService = {};

    candidatsService.data = {};

    candidatsService.get = function() {
        $http.get('candidats.json')
            .success(function(data) {
                candidatsService.data.candidats = data;
            });

        return candidatsService.data;
    };

    return candidatsService;
});


//Define Routing for app
sampleApp.config(['$routeProvider',
                  function($routeProvider) {
                      $routeProvider.
                      when('/candidatos', {
                          templateUrl: 'templates/candidatos.html',
                          controller: 'CandidatosController'
                      }).
                      when('/candidatos-suplentes', {
                          templateUrl: 'templates/candidatos-suplentes.html',
                          controller: 'CandidatosSuplentesController'
                      }).
                      when('/proposta', {
                          templateUrl: 'templates/proposta.html',
                          controller: 'PropostaController'
                      }).
                      when('/apresentacao', {
                          templateUrl: 'templates/apresentacao.html',
                          controller: 'ApresentacaoController'
                      }).
                      when('/info', {
                          templateUrl: 'templates/info.html',
                          controller: 'InfoController'
                      }).
                      otherwise({
                          redirectTo: '/proposta'
                      });
                  }]);


sampleApp.controller('CandidatosController', function($scope, $http, candidatsService) {
    $scope.candidats = candidatsService.get();

});

sampleApp.controller('CandidatosSuplentesController', function($scope, $http, candidatsService) {
   $scope.candidats = candidatsService.get();

});

sampleApp.controller('PropostaController', function($scope) {

    $scope.message = 'Proposta';

});

sampleApp.controller('ApresentacaoController', function($scope) {

    $scope.message = 'Apresentação';

});

sampleApp.controller('InfoController', function($scope) {

    $scope.message = 'Info';

});

sampleApp.controller('MainCtrl', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
    };
});


