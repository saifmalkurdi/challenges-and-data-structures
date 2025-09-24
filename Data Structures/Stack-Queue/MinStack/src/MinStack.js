const Node = require("./Node");

class MinStack {
  constructor() {
    this.top = null; //3 , 12 , 7 , 15 , null
    this.length = 0; // 4
  }

  // adding a value
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length += 1;
    return this;
  }

  // removing a value
  pop() {
    if (this.isEmpty()) return null;
    const value = this.top.value;
    this.top = this.top.next;
    this.length -= 1;
    return value;
  }

  // returning the top value
  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  // Boolean: is stack empty?
  isEmpty() {
    return this.length === 0;
  }

  // return the minimum value
  getMin() {
    if (this.isEmpty()) return null;
    let min = this.top.value;
    let current = this.top.next;
    while (current) {
      if (current.value < min) min = current.value;
      current = current.next;
    }
    return min;
  }

  // print the stack
  printStack() {
    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.exports = MinStack;
