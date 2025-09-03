const LinkedList = require("../LinkedList");

const a = new LinkedList().add(1).add(3).add(5);
const b = new LinkedList().add(2).add(4).add(6);

const merged = LinkedList.mergeSortedLists(a, b);
merged.printList(); // Head -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
