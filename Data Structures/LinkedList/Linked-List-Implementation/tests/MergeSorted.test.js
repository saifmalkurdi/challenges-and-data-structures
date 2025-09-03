const LinkedList = require("../LinkedList");

// One list is empty
test("merging when one list is empty", () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList().add(1).add(2).add(3);

  const merged = LinkedList.mergeSortedLists(list1, list2);
  expect(merged.printList()).toBe("Head -> 1 -> 2 -> 3 -> null");
});

// Both lists empty
test("merging when both lists are empty", () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();

  const merged = LinkedList.mergeSortedLists(list1, list2);
  expect(merged.head).toBe(null); // merged list should be empty
});

// Normal merge
test("merge two sorted lists with values", () => {
  const list1 = new LinkedList().add(5).add(10).add(15);
  const list2 = new LinkedList().add(2).add(3).add(20);

  const merged = LinkedList.mergeSortedLists(list1, list2);

  // Expected: 2 -> 3 -> 5 -> 10 -> 15 -> 20
  let values = [];
  let curr = merged.head;
  while (curr) {
    values.push(curr.data);
    curr = curr.next;
  }
  expect(values).toEqual([2, 3, 5, 10, 15, 20]);
});
