const LinkedList = require("./LinkedList");

const list = new LinkedList();

console.log("➡️ Print an empty list:");
list.printList();
console.log("\n➡️ Try removing from an empty list:");
list.remove(10);

console.log("\n➡️ Add nodes using add():");
list.add(5).add(10).add(20).add(30);
list.printList();

console.log("\n➡️ Remove a node with value 10:");
list.remove(10);
list.printList();

console.log("\n➡️ Check if values exist using includes():");
console.log("Includes 20? ->", list.includes(20));
console.log("Includes 10? ->", list.includes(10));

console.log("\n➡️ Insert 15 at index 2 using insertAt():");
list.insertAt(15, 2);
list.printList();

console.log("\n➡️ Try inserting at an invalid index (50 at index 10):");
try {
  list.insertAt(50, 10);
} catch (err) {
  console.log("Caught error:", err.message);
}
