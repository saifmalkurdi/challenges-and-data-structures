const LinkedList = require("../LinkedList");

// 1. testing a non-empty list
test("reverses a non-empty list (1->2->3->4 -> 4->3->2->1)", () => {
  const list = new LinkedList();
  list.add(1).add(2).add(3).add(4);

  list.reverse();

  expect(list.length).toBe(4);

  let n = list.head;
  expect(n.data).toBe(4);

  n = n.next;
  expect(n.data).toBe(3);

  n = n.next;
  expect(n.data).toBe(2);

  n = n.next;
  expect(n.data).toBe(1);

  n = n.next;
  expect(n).toBeNull();
});

// testing a single-node list
test("reverses a single-node list (no change)", () => {
  const list = new LinkedList();
  list.add(10);

  list.reverse();

  expect(list.length).toBe(1);
  expect(list.head.data).toBe(10);
  expect(list.head.next).toBeNull();
});

// testing an empty list
test("reverses an empty list (head stays null)", () => {
  const list = new LinkedList();

  list.reverse();

  expect(list.length).toBe(0);
  expect(list.head).toBeNull();
});

// testing a list with duplicate values
test("reverses a list with duplicate values (1->2->2->3 -> 3->2->2->1)", () => {
  const list = new LinkedList();
  list.add(1).add(2).add(2).add(3);

  list.reverse();

  expect(list.length).toBe(4);

  let n = list.head;
  expect(n.data).toBe(3);

  n = n.next;
  expect(n.data).toBe(2);

  n = n.next;
  expect(n.data).toBe(2);

  n = n.next;
  expect(n.data).toBe(1);

  n = n.next;
  expect(n).toBeNull();
});
