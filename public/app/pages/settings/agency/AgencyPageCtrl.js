/**
 * @author JAMP
 * created on 05.08.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings')
    .controller('AgencyPageCtrl', AgencyPageCtrl);

  /** @ngInject */
  function AgencyPageCtrl($scope, $http, $filter) {
      $scope.alert = {show:false, message:'',icon:''.icon,color:''};
      $scope.smartTablePageSize = 10;

      functions.get($http,'/partner/agency',function callback(response) {
          $scope.agencyList = response.data;
      });
      $scope.createPartner = function (partner) {
          partner.partner_type = 'AGENCY';
          console.log(partner);
          functions.post($http,'/partner/new',partner,function (response) {
              $scope.partner = {};
              console.log(response);
              $scope.alert.show = true;
          });

      }
  }


})();
