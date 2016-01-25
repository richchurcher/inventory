// Sample service unit tests
describe('productlist module services', function () {

  beforeEach(module('inventory.productlist'));

  describe('productService', function () {
    var productService;
    
    beforeEach(inject(function (_productService_) {
      productService = _productService_;
    }));

    it('should return an array', inject(function () {
      productService.getAll().should.be.an('array');
    }));

    it('should return objects with the required properties', 
      inject(function () {
        var products = productService.getAll();
        if (products.length) {
          products[0].should.contain.all.keys([
            'id', 
            'name', 
            'price', 
            'type'
          ]);
        }
      }
    ));

  });

});
