/**
 * @author w.aular
 */
(function () {
    'use strict';


  angular.module('BlurAdmin.pages.client', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('client', {
          url: '/client',
          title: 'client',
          templateUrl: 'app/pages/client/client.html',
          controller: 'ClientPageCtrl',
        })

        .state('create', {
          url: '/create',
          title: 'create client',
          templateUrl: 'app/pages/client/create/create.html',
          controller: 'ClientPageCtrl',
        });



  }

    angular.module('BlurAdmin.pages.client', ['ui.select', 'ngSanitize'])
        .config(routeConfig);


    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('client', {
                url: '/client',
                template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'Clients',
                controller: 'ClientCtrl',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 50,
                },
            })
            .state('client.list', {
                url: '/list',
                templateUrl: 'app/pages/client/list/list.html',
                title: 'List Clients',
                sidebarMeta: {
                    order: 0,
                },
            })
            .state('client.create', {
                url: '/create',
                templateUrl: 'app/pages/client/create/create.html',
                title: 'New Client',
                controller: 'ClientCreateCtrl',
                sidebarMeta: {
                    order: 10,
                },
            })
    }
})();
