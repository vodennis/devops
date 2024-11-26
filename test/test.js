var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 5 for Fib(5)', function() {
        assert.strictEqual(main.fibonacci(5), 5);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });
});

describe('Factorial Function', function() {
  it('should return undefined for negative numbers', function() {
    assert.strictEqual(main.factorial(-5), undefined);
  });
});

describe('Factorial Function', function() {
  it('should return 1 for factorial(0)', function() {
      assert.strictEqual(main.factorial(0), 1);
  });
  it('should return 1 for factorial(1)', function() {
      assert.strictEqual(main.factorial(1), 1);
  });
  it('should return 120 for factorial(5)', function() {
      assert.strictEqual(main.factorial(5), 120);
  });
});
