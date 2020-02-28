/**
 * @author JAMP
 * created on 05.08.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings')
    .controller('SocietesPageCtrl', SocietesPageCtrl);

  /** @ngInject */
  function SocietesPageCtrl($scope, $http, $filter) {
      $scope.alert = {show:false, message:'',icon:''.icon,color:''};
      $scope.smartTablePageSize = 10;

      functions.get($http,'/partner/partner',function callback(response) {
          $scope.societesList = response.data;
      });

      $scope.createPartner = function (partner) {
        partner.partner_type = 'PARTNER';
          console.log(partner);
        functions.post($http,'/partner/new',partner,function (response) {
            $scope.partner = {};
            console.log(response);
            $scope.alert.show = true;
        });

      }
  }


})();
