/**
 * @author JAMP
 * created on 05.08.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.client')
    .controller('ClientPageCtrl', ClientPageCtrl);

  /** @ngInject */
  function ClientPageCtrl($scope, fileReader, $filter, $uibModal) {

     $scope.civilite = [
        {name : "M.", id : "1"},
        {name : "Mme", id : "2"},
        {name : "Ste", id : "3"},
        {name : "M. et Mme", id : "4"},
        {name : "Mmmes", id : "5"},
        {name : "MM.", id : "6"}
    ];

   

  }


})();
