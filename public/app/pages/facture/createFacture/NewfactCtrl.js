/**
 * @author JAMP
 * created on 03.08.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.facture')
    .controller('NewfactCtrl', NewfactCtrl);

  /** @ngInject */
  function NewfactCtrl($scope, fileReader, $filter, $uibModal) {

        

        $scope.selectType = [
        {
          label: "Jose Marin",
          group: "Client",
          value: "1"
        },
        {
          label: "producciones M2B",
          group: "Société",
          value: "2"
        }
        ];

        $scope.selectArt = [
          { label: "Service", value: "1" },
          { label: "Produit", value: "2" },
          { label: "Heures", value: "3" },
          { label: "Jours", value: "4" },

        ];

        $scope.addItem = function() {
          $scope.items = [];
          $scope.inserted = {
              id: $scope.items+1,
              name: '',
              status: null,
              group: null
            };
            $scope.items.push($scope.inserted);
        };

        // $scope.showGroup = function(item) {
        //   if(user.group && $scope.groups.length) {
        //     var selected = $filter('filter')($scope.groups, {id: user.group});
        //     return selected.length ? selected[0].text : 'Not set';
        //   } else return 'Not set'
        // };

        // $scope.showStatus = function(item) {
        //   var selected = [];
        //   if(user.status) {
        //     selected = $filter('filter')($scope.statuses, {value: item.status});
        //   }
        //   return selected.length ? selected[0].text : 'Not set';
        // };


        $scope.removeItem = function(index) {
          $scope.items.splice(index, 1);
        };

  }


})();
