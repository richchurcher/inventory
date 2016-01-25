(function () {
  'use strict';

  angular

    .module('inventory.productlist')

    .filter('convertCurrency', function () {
      return function (input, currency) {
        switch (currency) {
          case 'USD':
            return input * 0.76;

          case 'EUR':
            return input * 0.67;

          default:
            return input;
        }
      };
    });

})();
