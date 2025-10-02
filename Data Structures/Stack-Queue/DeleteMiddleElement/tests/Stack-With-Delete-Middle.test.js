const StackWithDeleteMiddle = require("../src/StackWithDeleteMiddle");

describe("StackWithDeleteMiddle", () => {
  test("deletes the middle element when size is odd", () => {
    const s = new StackWithDeleteMiddle();
    s.push(7).push(14).push(3).push(8).push(5);
    // Stack Top → 5 -> 8 -> 3 -> 14 -> 7

    s.deleteMiddle();
    // Middle (odd=5 → index 2 from bottom) → remove 3
    expect(s.length).toBe(4);

    let values = [];
    let curr = s.top;
    while (curr) {
      values.push(curr.value);
      curr = curr.next;
    }
    expect(values).toEqual([5, 8, 14, 7]); // Top → 5 -> 8 -> 14 -> 7
  });

  test("deletes the LOWER middle element when size is even", () => {
    const s = new StackWithDeleteMiddle();
    [1, 2, 3, 4, 5, 6].forEach((v) => s.push(v));
    // Stack Top → 6 -> 5 -> 4 -> 3 -> 2 -> 1

    s.deleteMiddle();
    // Even=6 → lower middle is index 2 from bottom → remove 3
    expect(s.length).toBe(5);

    let values = [];
    let curr = s.top;
    while (curr) {
      values.push(curr.value);
      curr = curr.next;
    }
    expect(values).toEqual([6, 5, 4, 2, 1]);
  });

  test("deleting from an empty stack does nothing", () => {
    const s = new StackWithDeleteMiddle();

    expect(() => s.deleteMiddle()).not.toThrow();
    expect(s.length).toBe(0);
    expect(s.top).toBeNull();
  });

  test("deleting when stack has one element removes it", () => {
    const s = new StackWithDeleteMiddle();
    s.push(42);

    s.deleteMiddle();

    expect(s.length).toBe(0);
    expect(s.top).toBeNull();
  });
});
