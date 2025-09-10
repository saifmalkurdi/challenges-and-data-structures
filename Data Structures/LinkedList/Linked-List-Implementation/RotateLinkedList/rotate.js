const LinkedList = require("../LinkedList");

const list = new LinkedList();
list.add(1).add(2).add(3).add(4).add(5);

console.log("\n➡️ Unchanged:");
list.rotateLeft(0);
list.printList();

console.log("\n➡️ Rotate Left by 2:");
list.rotateLeft(2);
list.printList();

console.log("\n➡️ Rotate Left by 7 (greater than length):");
list.rotateLeft(7);
list.printList();

console.log("\n➡️ Rotate Right by 2 (negative k):");
list.rotateLeft(-2);
list.printList();
