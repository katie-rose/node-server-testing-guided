describe('calculator', () => {
  describe('add() method', () => {
    it('should add two numbers', () => {
      // Arrange: setup the world for the test
      const valA = 2;
      const valB = 2;
      const expectedResult = 4;

      // Act: execute the code you want to test
      const actual = add(valA, valB);

      // Assert: check that the code works
      expect(actual).toBe(expectedResult);
    });

    it('adds two numbers - second iteration', () => {
      expect(add(2, 2)).toBe(4);
      expect(add(2, 3)).toBe(5);
      expect(add(-2, 2)).toBe(0);
      expect(add(0, 2)).toBe(2);
    });

    it('adds multiple numbers', () => {
      expect(add(1, 2, 3)).toBe(6);
      expect(add(1, -2, 3)).toBe(2);
      expect(add(1, 2, 4, 0, 1)).toBe(8);
      expect(add(-1, 2, 0)).toBe(1);
    });
  });

  describe('multiply() method', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(3, 7)).toBe(21);
      expect(multiply(0, 7)).toBe(0);
    });

    it('should return the product of two negative numbers', () => {
      expect(multiply(-3, -7)).toBe(21);
      expect(multiply(0, -7)).toBe(-0);
    });
  });
});

function add(...args) {
  return args.reduce((total, val) => {
    return total + val;
  }, 0);
}

function multiply(a, b) {
  return a * b;
}

// change the add() method to support adding any number of values separated by comma
// calling add(1,2,3) the return should be 6
// and calling add(1, 1, 1, 1, 4, 5, 6) should return 19
