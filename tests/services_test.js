// Sample filter unit tests
describe('productlist module filters', function () {

  beforeEach(module('inventory.productlist'));

  describe('convertCurrency service', function () {
    var convertCurrency;
    
    beforeEach(inject(function ($filter) {
      convertCurrency = $filter('convertCurrency');
    })); 

    it('should return a number', inject(function () {
      convertCurrency(100).should.be.a('number');
    }));

    context('when given 1', function () {
      // These would be brittle tests IRL: fluctuating exchange rates!
      it('should return 0.76 for USD', inject(function () {
        convertCurrency(1, 'USD').should.equal(0.76);
      }));
      it('should return 0.67 for EUR', inject(function () {
        convertCurrency(1, 'EUR').should.equal(0.67);
      }));
      it('should return 1 for NZD', inject(function () {
        convertCurrency(1, 'NZD').should.equal(1);
      }));
      it('should return 1 by default', inject(function () {
        convertCurrency(1).should.equal(1);
      }));
    });

  });

});
