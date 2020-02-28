/**
 * @author w.aular
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.client')
        .controller('ClientCtrl', ClientCtrl);
    /** @ngInject */
    function ClientCtrl($scope, $http, $filter, editableOptions,$timeout) {
        /*  Tables */
        $scope.alert = {show:false, message:'',icon:''.icon,color:''};
        $scope.smartTablePageSize = 10;
        $scope.client_disable = false;

        functions.get($http,'/client/get',function callback(response) {
            $scope.clientList = response.data;
        });

        functions.get($http,'/partner/partner',function callback(response) {
            $scope.partners = response.data;
        });
        editableOptions.theme = 'bs3';
        $scope.civilities = [
            {name : "M.", id : "1"},
            {name : "Mme", id : "2"},
            {name : "Ste", id : "3"},
            {name : "M. et Mme", id : "4"},
            {name : "Mmmes", id : "5"},
            {name : "MM.", id : "6"}
        ];

        $scope.createClient = function (client) {
            functions.post($http,'/client/new',client,function (response) {
                $scope.client = {};
                console.log(response);
                $scope.alert.show = true;
            });

        }

        /*  Charges

        $scope.simpleBarData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [15, 24, 43, 27, 45, 35, 23, 44, 38, 50, 26, 20]
            ]
        };
        $scope.simpleBarOptions = {
            fullWidth: true,
            height: "300px"
        };
        $timeout(function(){
            new Chartist.Bar('#simple-bar', $scope.simpleBarData, $scope.simpleBarOptions);
        });*/
    }

})();