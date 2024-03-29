const assert = require('assert');
const calculateNumber = require('./1-calcul');



describe('MyFunction', () => {
    it('should round two numbers and return the sum of it', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    });

    it('should round two numbers and return the subtraction of it', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 2.2), 0)
    })

    it('should round two numbers and return the divition of it', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 9.6, 5.1), 2);
    });
    
    it(`checking if numbers round`, function() {
        assert.strictEqual(calculateNumber("DIVIDE", 1.7, 0), "Error");
    });

})
