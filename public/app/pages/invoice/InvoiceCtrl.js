/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.invoice')
        .controller('InvoiceCtrl', InvoiceCtrl);
    /** @ngInject */
    function InvoiceCtrl($scope, $filter, editableOptions, editableThemes) {
        $scope.smartTablePageSize = 10;
        $scope.smartTableData = [
            {
                id: 1,
                agency: '0',
                scp: '0106',
                scpName: 'So.CoM',
                date: '06/08/2018',
                client: 'CHAKIR',
                devis: 'SOBM77008',
                montant: '5350.00'
            },{
                id: 1,
                agency: '0',
                scp: '0106',
                scpName: 'So.CoM',
                date: '06/08/2018',
                client: 'CHAKIR',
                devis: 'SOBM77008',
                montant: '5350.00'
            },{
                id: 1,
                agency: '0',
                scp: '0106',
                scpName: 'So.CoM',
                date: '06/08/2018',
                client: 'CHAKIR',
                devis: 'SOBM77008',
                montant: '5350.00'
            },{
                id: 1,
                agency: '0',
                scp: '0106',
                scpName: 'So.CoM',
                date: '06/08/2018',
                client: 'CHAKIR',
                devis: 'SOBM77008',
                montant: '5350.00'
            },{
                id: 1,
                agency: '0',
                scp: '0106',
                scpName: 'So.CoM',
                date: '06/08/2018',
                client: 'CHAKIR',
                devis: 'SOBM77008',
                montant: '5350.00'
            },{
                id: 1,
                agency: '0',
                scp: '0106',
                scpName: 'So.CoM',
                date: '06/08/2018',
                client: 'CHAKIR',
                devis: 'SOBM77008',
                montant: '5350.00'
            },{
                id: 1,
                agency: '0',
                scp: '0106',
                scpName: 'So.CoM',
                date: '06/08/2018',
                client: 'CHAKIR',
                devis: 'SOBM77008',
                montant: '5350.00'
            },{
                id: 1,
                agency: '0',
                scp: '0106',
                scpName: 'So.CoM',
                date: '06/08/2018',
                client: 'CHAKIR',
                devis: 'SOBM77008',
                montant: '5350.00'
            }
        ];
        editableOptions.theme = 'bs3';
    }

})();