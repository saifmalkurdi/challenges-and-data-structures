const Stack = require("../src/Stack.js");

describe("Stack", () => {
  test("push adds to top", () => {
    const s = new Stack();
    s.push(10);
    expect(s.peek()).toBe(10);
    s.push(20);
    expect(s.peek()).toBe(20);
  });

  test("pop removes from top and returns value", () => {
    const s = new Stack();
    s.push(10).push(20).push(30);
    expect(s.pop()).toBe(30);
    expect(s.peek()).toBe(20);
    expect(s.pop()).toBe(20);
    expect(s.pop()).toBe(10);
    expect(s.pop()).toBeNull();
  });

  test("isEmpty works", () => {
    const s = new Stack();
    expect(s.isEmpty()).toBe(true);
    s.push(1);
    expect(s.isEmpty()).toBe(false);
    s.pop();
    expect(s.isEmpty()).toBe(true);
  });
});
