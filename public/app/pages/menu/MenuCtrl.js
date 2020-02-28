/**
 * @author will.aular
 * created on 05.08.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.menu')
        .controller('MenuCtrl', MenuCtrl);

    /** @ngInject */
    function MenuCtrl($scope) {
        $scope.menu = [
            {
                title: 'Dashboard',
                icon:'ion-android-home',
                subMenu:false,
                href:'/dashboard'
            }
        ];

    }
})();
