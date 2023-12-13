const chai = require('chai');
const calculateNumber = require('./1-calcul');
const expect = chai.expect;

describe('MyFunction', () => {
    it('should round two numbers and return the sum of it', () => {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should round two numbers and return the subtraction of it', () => {
        expect(calculateNumber('SUBTRACT', 2.4, 2.2)).to.equal(0)
    })

    it('should round two numbers and return the divition of it', () => {
        expect(calculateNumber('DIVIDE', 9.6, 5.1)).to.equal(2);
    });
    
    it(`checking if numbers round`, function() {
        expect(calculateNumber("DIVIDE", 1.7, 0)).to.equal("Error");
    });

})
