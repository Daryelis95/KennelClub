/**
 * @author JAMP
 * created on 03.08.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.facture')
    .controller('NewfacturePageCtrl', NewfacturePageCtrl);

  /** @ngInject */
  function NewfacturePageCtrl($scope, fileReader, $filter, $uibModal) {
    //Select para tipo de cliente a facturar.
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
        // Select para el tipo de articulo.
    $scope.selectArt = [
    	{ 
    		label: "Service", 
    		value: "1" 
    	},
    	{ 
    		label: "Produit", 
    		value: "2"
    	},
    	{ 
    		label: "Heures", 
    		value: "3" 
    	},
    	{ 
    		label: "Jours", 
    		value: "4" 
    	}

    ];

    $scope.cars = [
        {model : "Ford Mustang", color : "red"},
        {model : "Fiat 500", color : "white"},
        {model : "Volvo XC90", color : "black"}
    ];
	$scope.addUser = function() {
    	$scope.inserted = {
        	id: $scope.users.length+1,
        	name: '',
        	status: null,
        	group: null
      	};
      	$scope.users.push($scope.inserted);
    };
    
  }

})();
