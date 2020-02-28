/**
 * @author w.aular
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.invoice', ['ui.select', 'ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('invoice', {
                url: '/invoice',
                template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'Invoices',
                controller: 'InvoiceCtrl',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 250,
                },
            })
            .state('invoice.list', {
                url: '/list',
                templateUrl: 'app/pages/invoice/list/list.html',
                title: 'List Invoice',
                sidebarMeta: {
                    order: 0,
                },
            })
    }
})();
