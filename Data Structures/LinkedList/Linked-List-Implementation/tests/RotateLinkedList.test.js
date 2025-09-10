const LinkedList = require("../LinkedList");

test("rotateLeft by 0 leaves the list unchanged", () => {
  const list = new LinkedList();
  list.add(1).add(2).add(3);
  list.rotateLeft(0);
  expect(list.printList()).toBe("Head -> 1 -> 2 -> 3 -> null");
});

test("rotateLeft by k greater than length", () => {
  const list = new LinkedList();
  list.add(1).add(2).add(3).add(4).add(5).add(6);
  list.rotateLeft(7); // length = 6, so 7 % 6 = 1
  expect(list.printList()).toBe("Head -> 2 -> 3 -> 4 -> 5 -> 6 -> 1 -> null");
});
