const Node = require("./nod");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 1. add
  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.length++;
      return this;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = node;
    this.length++;
    return this;
  }

  // 2. remove
  remove(data) {
    if (!this.head) {
      console.log("Cannot remove from empty list.");
      return false;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return true;
    }

    let prev = this.head;
    let curr = this.head.next;
    while (curr) {
      if (curr.data === data) {
        prev.next = curr.next;
        this.length--;
        return true;
      }
      prev = curr;
      curr = curr.next;
    }
    console.log(`Value ${data} not found in the list.`);
    return false;
  }

  // 3. includes
  includes(data) {
    let curr = this.head;
    while (curr) {
      if (curr.data === data) return true;
      curr = curr.next;
    }
    return false;
  }

  // 4. insert
  insertAt(data, index) {
    if (index < 0 || index > this.length) {
      console.log(`Invalid index: ${index}.`);
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      this.length++;
      return this;
    }

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) prev = prev.next;

    prev.next = new Node(data, prev.next);
    this.length++;
    return this;
  }

  // 5. reverse
  reverse() {
    // Edge cases:
    // 1) Empty list (head is null)
    // 2) Single-node list (head.next is null)
    if (!this.head || !this.head.next) {
      return this; // no change; keep chaining
    }

    let prev = null; // {20 → {10 → null}}
    let curr = this.head; // {30 → null}

    while (curr) {
      const next = curr.next; // null
      curr.next = prev; // {20 → {10 → null}}
      prev = curr; // {30 → {20 → {10 → null}}}
      curr = next; // null
    }

    this.head = prev; // {30 → {20 → {10 → null}}}
    return this;
  }

  // 6. print
  printList() {
    if (!this.head) {
      console.log("The linked list is empty.");
      return;
    }
    let curr = this.head;
    let output = "Head";
    while (curr) {
      output += ` -> ${curr.data}`;
      curr = curr.next;
    }
    output += " -> null";
    console.log(output);
  }
}

module.exports = LinkedList;
