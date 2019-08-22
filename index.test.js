describe("calculator", () => {
  describe("add() method", () => {
    it("should add two numbers", () => {
      // Arrange: setup the world for the test
      const valA = 2;
      const valB = 2;
      const expectedResult = 4;
      // Act: execute the code you want to test
      const actual = add(valA, valB);
      // Assert: check that the code works
      expect(actual).toBe(expectedResult);
    });
    it("adds two numbers - second iteration", () => {
      expect(add(2, 2)).toBe(4);
      expect(add(2, 3)).toBe(5);
      expect(add(-2, 2)).toBe(0);
      expect(add(0, 2)).toBe(2);
    });
  });
  describe("multiply() method", () => {
    it("should return the product of two numbers", () => {
      expect(multiply(3, 7)).toBe(21);
      expect(multiply(0, 7)).toBe(0);
    });
  });
  describe("multiply() method", () => {
    it("should return the product of two negative numbers", () => {
      expect(multiply(-3, -7)).toBe(21);
      expect(multiply(0, -7)).toBe(-0);
    });
  });
});
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
