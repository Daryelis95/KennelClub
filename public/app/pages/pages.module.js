/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.menu',
    'BlurAdmin.pages.dashboard',
      'BlurAdmin.pages.client',
    'BlurAdmin.pages.invoice',
    'BlurAdmin.pages.settings',
    //'BlurAdmin.pages.ui',
    //'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.facture',
    'BlurAdmin.pages.societes',
    'BlurAdmin.pages.profile',
    //'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.adminColor'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider,$interpolateProvider) {
     
  //  $urlRouterProvider.otherwise('/dashboard');
/*
    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: 'Facture',
        stateRef: 'facture',
      },
      {
        title: 'Clients',
        stateRef: 'client',
      },
      {
        title: 'Sociétés',
        stateRef: 'societes',
      },
       {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });*/
  }

})();
