/**
 * @author will.aular
 * created on 05.08.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.createSociete')
    .controller('CreateSocieteCtrl', CreateSocieteCtrl);

  /** @ngInject */
  function CreateSocieteCtrl($scope, $filter) {

      $scope.createPartner = function (partner) {
        partner.partner_type = 'SOCIETE';
        console.log(partner);
        $scope.partner = {};
      }
  }


})();
