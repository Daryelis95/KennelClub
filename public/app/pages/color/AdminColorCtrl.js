/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.adminColor',[])
        .controller('AdminColorCtrl', AdminColorCtrl);
    /** @ngInject */
    function AdminColorCtrl($scope, $http) {
        $scope.loadData = function(){
            functions.get($http, '/color', function(response){
                $scope.colors = response.data;
            });
        };
        
      $scope.colorTableSize = 5;
    }

})();