/**
 * @author will.aular
 * created on 05.08.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings')
    .controller('AgencyPageCtrl', AgencyPageCtrl);

  /** @ngInject */
  function AgencyPageCtrl($scope, $filter) {

      $scope.createPartner = function (partner) {
        partner.partner_type = 'AGENCY';
        console.log(partner);
        $scope.partner = {};
      }
  }


})();
