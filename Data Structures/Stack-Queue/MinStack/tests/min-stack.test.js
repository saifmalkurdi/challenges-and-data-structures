// min-stack.test.js
const MinStack = require("../src/MinStack");

describe("MinStack", () => {
  let stack;

  beforeEach(() => {
    stack = new MinStack();
  });

  // 1) Test retrieving the minimum element in the stack
  test("gets the minimum element", () => {
    stack.push(15);
    stack.push(7);
    stack.push(12);
    stack.push(3);
    expect(stack.getMin()).toBe(3);
  });

  // 2) Test popping elements and verifying the minimum after the pop
  test("updates min after popping", () => {
    stack.push(15);
    stack.push(7);
    stack.push(12);
    stack.push(3);

    const popped = stack.pop(); // should be 3
    expect(popped).toBe(3);
    expect(stack.getMin()).toBe(7);
  });

  // 3) Test pushing elements and verifying the minimum after the push
  test("updates min after pushing", () => {
    stack.push(15);
    stack.push(7);
    stack.push(12);
    expect(stack.getMin()).toBe(7);

    stack.push(2);
    expect(stack.getMin()).toBe(2);
  });
});
