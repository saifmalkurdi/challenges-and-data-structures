const MinStack = require("./MinStack");

const minStack = new MinStack();

// Push elements
minStack.push(15); // Top -> 15 (min: 15)
minStack.push(7); // Top -> 7 -> 15 (min: 7)
minStack.push(12); // Top -> 12 -> 7 -> 15 (min: 7)
minStack.push(3); // Top -> 3 -> 12 -> 7 -> 15 (min: 3)

// Print the stack
console.log("Print the stack:");
minStack.printStack(); // Output: Top -> 3 -> 12 -> 7 -> 15

// Get the minimum element
let min = minStack.getMin();
console.log("Min:", min); // Min: 3

// Pop a node from the stack
let popped = minStack.pop();
console.log("Popped:", popped); // Popped: 3
console.log("After popping:");
minStack.printStack(); // Output: Top -> 12 -> 7 -> 15

// Get the new minimum element
min = minStack.getMin();
console.log("Min:", min); // Min: 7

// Peek the top node
let peeked = minStack.peek();
console.log("Peeked:", peeked); // Peeked: 12

// Push another element
minStack.push(2); // Top -> 2 -> 12 -> 7 -> 15 (min: 2)
console.log("After pushing 2:");
minStack.printStack(); // Output: Top -> 2 -> 12 -> 7 -> 15

// Get the new minimum element
min = minStack.getMin();
console.log("Min:", min); // Min: 2

// Check if the stack is empty
let isEmpty = minStack.isEmpty();
console.log("IsEmpty:", isEmpty); // IsEmpty: false
