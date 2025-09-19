// src/queue.js
const Node = require("./Node.js");

// FIFO
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // Add a value to the end of the queue
  enqueue(value) {
    // 10
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.length += 1;
    return this; // chaining
  }

  // Remove and return the value at the front; null if empty
  dequeue() {
    if (this.isEmpty()) return null;
    const value = this.front.value;
    this.front = this.front.next;
    this.length -= 1;
    if (!this.front) this.rear = null; // became empty
    return value;
  }

  // Return the value at the front without removing; null if empty
  peek() {
    return this.isEmpty() ? null : this.front.value;
  }

  // Boolean: is queue empty?
  isEmpty() {
    return this.length === 0;
  }
}

module.exports = Queue;
