const Stack = require("../../Stack-Queue-Implementation/src/Stack");

class StackWithDeleteMiddle extends Stack {
  deleteMiddle() {
    if (this.isEmpty()) {
      console.log("Stack is empty. Nothing to delete.");
      return;
    }

    if (this.length === 1) {
      this.pop();
      return;
    }

    const n = this.length;
    // Find middle index
    const middleIndex = n % 2 === 0 ? Math.floor(n / 2) - 1 : Math.floor(n / 2);

    // To simulate "bottom → top" traversal, we can use an auxiliary stack
    const temp = [];
    // Move all elements into array
    let current = this.top;
    while (current) {
      temp.push(current.value);
      current = current.next;
    }

    // Remove middle element
    const removeIndex = temp.length - 1 - middleIndex;
    temp.splice(removeIndex, 1); // remove middle element

    // Clear the stack
    this.top = null;
    this.length = 0;

    // Rebuild stack from modified temp (preserve order)
    for (let i = temp.length - 1; i >= 0; i--) {
      this.push(temp[i]);
    }
  }

  print() {
    let out = "Stack: Top → ";
    let curr = this.top;
    while (curr) {
      out += curr.value;
      if (curr.next) out += " -> ";
      curr = curr.next;
    }
    console.log(out);
  }
}

module.exports = StackWithDeleteMiddle;
