/**
 * @author w.aular
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.settings', ['ui.select', 'ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('settings', {
                url: '/settings',
                template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'Setting',
                sidebarMeta: {
                    icon: 'ion-settings',
                    order: 250,
                },
            })
            .state('settings.societeList', {
                url: '/societe',
                templateUrl: 'app/pages/settings/societes/societes.html',
                title: 'List Societes',
                controller: 'SocietesPageCtrl',
                sidebarMeta: {
                    order: 0,
                },
            })
            .state('settings.societeCreate', {
                url: '/societe/create',
                templateUrl: 'app/pages/settings/societes/create.html',
                title: 'Create Societes',
                controller: 'SocietesPageCtrl',
                sidebarMeta: {
                    order: 1,
                },
            })
            .state('settings.societe.update', {
                url: '/societe/update/{id}',
                templateUrl: 'app/pages/settings/societes/create.html',
                title: 'Edit Societes',
                controller: 'SocietesPageCtrl',
                sidebarMeta: {
                    order: 1,
                },
            })
            .state('settings.agency', {
                url: '/agency',
                templateUrl: 'app/pages/settings/agency/agency.html',
                title: 'List Agency',
                controller: 'AgencyPageCtrl',
                sidebarMeta: {
                    order: 2,
                },
            })
            .state('settings.agencyCreate', {
                url: '/agency/create',
                templateUrl: 'app/pages/settings/agency/create.html',
                title: 'Create Agency',
                controller: 'AgencyPageCtrl',
                sidebarMeta: {
                    order: 3,
                },
            })
    }
})();
