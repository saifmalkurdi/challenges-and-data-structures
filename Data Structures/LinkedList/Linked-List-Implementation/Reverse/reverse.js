const LinkedList = require("../LinkedList");

const list = new LinkedList();
list.add(1).add(2).add(3).add(4);

console.log("Original:");
list.printList();

list.reverse();
console.log("Reversed:");
list.printList();
