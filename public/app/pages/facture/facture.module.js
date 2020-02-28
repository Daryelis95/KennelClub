/**
 * @author JAMP
 * created on 03.08.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.facture', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('facture', {
          url: '/facture',
          title: 'facture',
          templateUrl: 'app/pages/facture/facturation.html',
          controller: 'FacturePageCtrl',
        })

        .state('newfacture', {
          url: '/nouvellefacture',
          title: 'nouvellefacture',
          templateUrl: 'app/pages/facture/createFacture/nouvellefacture.html',
          controller: 'NewfactCtrl',
        });

  }

})();
