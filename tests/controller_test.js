// Sample controller unit tests
describe('productlist module controller', function () {

  beforeEach(module('inventory.productlist'));

  var listCtrl;
  var rootScope;

  beforeEach(inject(function($controller, $rootScope) {
    rootScope = $rootScope.$new();
    listCtrl = $controller('listCtrl', {
        $scope: rootScope
    });
  })); 
  
  it('should set a currency type', inject(function () {
    rootScope.currency.should.exist;
  }));

  it('should load a list of products', inject(function () {
    rootScope.products.should.be.an('array');
  }));

  it('should default to sort by name', inject(function () {
    rootScope.sort.should.equal('name');
  }));

  it('should default to ascending sort', inject(function () {
    rootScope.reverse.should.equal(false);
  }));

});
