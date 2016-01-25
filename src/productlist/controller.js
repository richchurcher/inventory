(function () {
  'use strict';

  angular

    .module('inventory.productlist')

    .controller('listCtrl', [
      '$scope', 
      'productService', 
      function ($scope, productService) {
        $scope.currency = 'NZD';
        $scope.sort = 'name';
        $scope.reverse = false;
        $scope.products = productService.getAll();
      }
    ]);

})();
