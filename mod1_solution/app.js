(function(){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject=['$scope','$filter'];
	function LunchCheckController($scope)
	{
		$scope.item="";
		$scope.lenItem=0;

		$scope.numOfItems=function()
		{
			var lenarr=splitString($scope.item);
			$scope.lenItem=lenarr;
		};

		function splitString(item) 
		{
	  		const arr = item.split(",");
	  		var lenarr=arr.length;
	  		return lenarr;
		};

		$scope.enjoyFunc=function()
		{
			$scope.check="Enjoy!!";
		};

		$scope.toomuchFunc=function()
		{
			$scope.check="Too Much!";
		};

		$scope.enterFunc=function()
		{
			$scope.check="Please enter data first";
		};

	}
})();