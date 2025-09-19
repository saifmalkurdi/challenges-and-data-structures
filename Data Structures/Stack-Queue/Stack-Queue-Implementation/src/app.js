const Stack = require("./Stack");
const Queue = require("./Queue");

console.log("--- Stack Demo ---");
const stack = new Stack();
stack.push(10).push(20).push(30);
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.isEmpty()); // false
stack.pop(); // 20
stack.pop(); // 10
console.log(stack.isEmpty()); // true

console.log("--- Queue Demo ---");
const queue = new Queue();
queue.enqueue(10).enqueue(20).enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.isEmpty()); // false
queue.dequeue(); // 20
queue.dequeue(); // 30
console.log(queue.isEmpty()); // true
