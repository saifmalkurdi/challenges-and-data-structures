const LinkedList = require("./LinkedList");

// 1. add
test("add() appends nodes to the end", () => {
  const list = new LinkedList();
  list.add(5);
  list.add(10);
  list.add(20);

  // length should be 3
  expect(list.length).toBe(3);

  //  5 -> 10 -> 20
  expect(list.head.data).toBe(5);
  expect(list.head.next.data).toBe(10);
  expect(list.head.next.next.data).toBe(20);
});

// 2. remove
test("remove() deletes the first node with the given value", () => {
  const list = new LinkedList();
  list.add(5);
  list.add(10);
  list.add(20);

  const removed = list.remove(10);
  expect(removed).toBe(true);
  expect(list.length).toBe(2);
  expect(list.includes(10)).toBe(false);

  expect(list.head.data).toBe(5);
  expect(list.head.next.data).toBe(20);
});

// 3. including.
test("includes() correctly checks for existing/non-existing values", () => {
  const list = new LinkedList();
  expect(list.includes(1)).toBe(false);

  list.add(1);
  list.add(2);

  expect(list.includes(1)).toBe(true);
  expect(list.includes(2)).toBe(true);
  expect(list.includes(99)).toBe(false);
});

// .4 insertAt
test("insertAt() inserts a node at the specified index", () => {
  const list = new LinkedList();
  list.add(5);
  list.add(20);
  list.add(30);

  list.insertAt(15, 1);

  expect(list.length).toBe(4);
  expect(list.head.data).toBe(5);
  expect(list.head.next.data).toBe(15);
  expect(list.head.next.next.data).toBe(20);
  expect(list.head.next.next.next.data).toBe(30);
});
