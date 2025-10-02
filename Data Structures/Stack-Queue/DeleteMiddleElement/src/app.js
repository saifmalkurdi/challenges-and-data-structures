const StackWithDeleteMiddle = require("./StackWithDeleteMiddle");

const stack = new StackWithDeleteMiddle();

stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);

console.log("---before deleting middle element---");
stack.print(); // Top → 5 -> 8 -> 3 -> 14 -> 7
stack.deleteMiddle();
console.log("---after deleting middle element---");
stack.print(); // Top → 5 -> 8 -> 14 -> 7

console.log("---pushing more elements---");
stack.push(2);
stack.push(9);
stack.push(11);

stack.print(); // Top → 11 -> 9 -> 2 -> 5 -> 8 -> 14 -> 7
stack.deleteMiddle();
console.log("---after deleting middle element---");
stack.print(); // Top → 11 -> 9 -> 2 -> 8 -> 14 -> 7
