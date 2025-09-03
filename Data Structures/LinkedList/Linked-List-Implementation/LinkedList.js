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

  // 6. mergeSorted
  static mergeSortedLists(list1, list2) {
    // Validate inputs
    if (!(list1 instanceof LinkedList) || !(list2 instanceof LinkedList)) {
      throw new Error("mergeSortedLists expects two LinkedList instances");
    }

    const merged = new LinkedList();

    // dummy node to handle edge cases
    const dummy = new Node(null);
    let tail = dummy;

    let curr1 = list1.head;
    let curr2 = list2.head;

    // Traverse both lists
    while (curr1 && curr2) {
      if (curr1.data <= curr2.data) {
        tail.next = new Node(curr1.data);
        curr1 = curr1.next;
      } else {
        tail.next = new Node(curr2.data);
        curr2 = curr2.next;
      }
      tail = tail.next;
      merged.length++;
    }

    // Append any remaining nodes from list1
    while (curr1) {
      tail.next = new Node(curr1.data);
      tail = tail.next;
      curr1 = curr1.next;
      merged.length++;
    }

    // Append any remaining nodes from list2
    while (curr2) {
      tail.next = new Node(curr2.data);
      tail = tail.next;
      curr2 = curr2.next;
      merged.length++;
    }

    merged.head = dummy.next; // skip dummy
    return merged;
  }

  // 7. print
  printList() {
    if (!this.head) {
      const emptyMsg = "Head -> null";
      console.log(emptyMsg);
      return emptyMsg;
    }

    let curr = this.head;
    let output = "Head";
    while (curr) {
      output += ` -> ${curr.data}`;
      curr = curr.next;
    }

    output += " -> null";
    console.log(output);
    return output;
  }
}

module.exports = LinkedList;
