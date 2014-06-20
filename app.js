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
                      }). // This is stupid but dynamic params are not working on the legacy version
                      when('/AMF', {
                          templateUrl: 'templates/candidatos/AMF.html'
                      }). when('/ATM', {
                          templateUrl: 'templates/candidatos/ATM.html'
                      }).when('/JFC', {
                          templateUrl: 'templates/candidatos/JFC.html'
                      }).when('/ASC', {
                          templateUrl: 'templates/candidatos/ASC.html'
                      }).when('/RBC', {
                          templateUrl: 'templates/candidatos/RBC.html'
                      }).when('/AAS', {
                          templateUrl: 'templates/candidatos/AAS.html'
                      }).
                      when('/BAL', {
                          templateUrl: 'templates/candidatos/BAL.html'
                      }).when('/MMA', {
                          templateUrl: 'templates/candidatos/MMA.html'
                      }).when('/DPU', {
                          templateUrl: 'templates/candidatos/DPU.html'
                      }).when('/ASM', {
                          templateUrl: 'templates/candidatos/ASM.html'
                      }).when('/JSG', {
                          templateUrl: 'templates/candidatos/JSG.html'
                      }).when('/ASN', {
                          templateUrl: 'templates/candidatos/ASN.html'
                      }).when('/JMO', {
                          templateUrl: 'templates/candidatos/JMO.html'
                      }).when('/MCR', {
                          templateUrl: 'templates/candidatos/MCR.html'
                      }).when('/MPR', {
                          templateUrl: 'templates/candidatos/MPR.html'
                      }).when('/JPT', {
                          templateUrl: 'templates/candidatos/JPT.html'
                      }).when('/FAP', {
                          templateUrl: 'templates/candidatos/FAP.html'
                      }).when('/MAC', {
                          templateUrl: 'templates/candidatos/MAC.html'
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


