const assert = require('assert');
const calculateNumber = require('./0-calcul');



describe('MyFunction', () => {
    it('should round two numbers and return the sum of it', () => {
        assert.strictEqual(calculateNumber(1, 2), 3);
    });

    it('should round two numbers and return the sum of it', () => {
        assert.strictEqual(calculateNumber(1.4, 2.2), 3)
    })

    it('should round two numbers and return the sum of it', () => {
        assert.strictEqual(calculateNumber(1.6, 2.7), 5);
    });

    it('should round two numbers and return the sum of it', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should round two numbers and return the sum of it', () => {
        assert.strictEqual(calculateNumber(-1.6, -1.7), -4);
    });
    
    it('should round two numbers and return the sum of it', () => {
        assert.strictEqual(calculateNumber(-1.4, -1.3), -2);
    });

});
