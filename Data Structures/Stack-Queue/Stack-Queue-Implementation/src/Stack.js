// src/stack.js
const Node = require("./Node");

// LIFO
class Stack {
  constructor() {
    this.top = null; // 20 , 10 , null
    this.length = 0; // 2
  }

  // Add a value to the top of the stack
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length += 1;
    return this;
  }

  // Remove and return the top value; null if empty
  pop() {
    if (this.isEmpty()) return null;
    const value = this.top.value;
    this.top = this.top.next;
    this.length -= 1;
    return value;
  }

  // Return the top value without removing; null if empty
  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  // Boolean: is stack empty?
  isEmpty() {
    return this.length === 0;
  }
}

module.exports = Stack;
