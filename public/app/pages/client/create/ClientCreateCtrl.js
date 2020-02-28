/**
 * @author JAMP
 * created on 05.08.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.client')
    .controller('ClientCreateCtrl', ClientCreateCtrl);

  /** @ngInject */
  function ClientCreateCtrl($scope, fileReader, $filter, $uibModal) {

    $scope.cars = [
        {model : "Ford Mustang", color : "red"},
        {model : "Fiat 500", color : "white"},
        {model : "Volvo XC90", color : "black"}
    ];
     // $scope.civilite = [
     // 	{	
     // 		value: "1",
     // 		name: "M."
     // 	},
     // 	{
     // 		value: "2",
     // 		name: "Mme"
     // 	},
     // 	{
     // 		value: "3",
     // 		name: "Ste"
     // 	},
     // 	{
     // 		value: "4",
     // 		name: "M. et Mme"
     // 	},
     // 	{
     // 		value: "5",
     // 		name: "Mmmes"
     // 	},
     // 	{
     // 		value: "6",
     // 		name: "MM."
     // 	}
     // ];

  }


})();
