(function () {

  angular

    .module('inventory.productlist')

    .directive('productList', [function () {
      return {
        templateUrl: '/src/productlist/template.html'
      };
    }]);

})();
