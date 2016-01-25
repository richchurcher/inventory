(function () {
  'use strict';

  angular

    .module('inventory.productlist')

    .factory('productService', [function () {
      return {
        getAll: function () {
          return [].concat(
            _.map(
              new LawnmowerRepository().getAll(), 
              _.partial(getViewModel, 'Lawnmower')),
            _.map(
              new PhoneCaseRepository().getAll(), 
              _.partial(getViewModel, 'Phone Case')),
            _.map(
              new TShirtRepository().getAll(), 
              _.partial(getViewModel, 'T-Shirt'))
          );
        }
      };
    }]);

  function getViewModel(productType, product) {
    product.type = productType;
    return _.pick(product, ['id', 'name', 'price', 'type']);
  }

})();
