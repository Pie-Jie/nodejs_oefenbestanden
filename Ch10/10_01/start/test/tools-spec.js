var expect = require('chai').expect;
var tools = require('../lib/tools');
describe('printName()', function() {
    
    it('should print the last name first', function() {
        
        var results = tools.printName({ first: 'Pieter-Jan', last: 'Desmadryl'});
        
        expect(results).to.equal('Desmadryl, Pieter-Jan');
        
    });
    
});