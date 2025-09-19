const Queue = require("../src/Queue");

describe("Queue", () => {
  test("enqueue adds to rear", () => {
    const q = new Queue();
    q.enqueue(10);
    expect(q.peek()).toBe(10);
    q.enqueue(20);
    expect(q.peek()).toBe(10);
  });

  test("dequeue removes from front and returns value", () => {
    const q = new Queue();
    q.enqueue(10).enqueue(20).enqueue(30);
    expect(q.dequeue()).toBe(10);
    expect(q.peek()).toBe(20);
    expect(q.dequeue()).toBe(20);
    expect(q.dequeue()).toBe(30);
    expect(q.dequeue()).toBeNull();
  });

  test("isEmpty works", () => {
    const q = new Queue();
    expect(q.isEmpty()).toBe(true);
    q.enqueue(1);
    expect(q.isEmpty()).toBe(false);
    q.dequeue();
    expect(q.isEmpty()).toBe(true);
  });
});
