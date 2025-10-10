const TNode = require("./TNode");
const BinaryTree = require("./BinaryTree");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    try {
      const addNode = (node, val) => {
        if (!node) return new TNode(val);
        if (val === node.data) return node; // ignore duplicates
        if (val < node.data) node.left = addNode(node.left, val);
        else node.right = addNode(node.right, val);
        return node;
      };
      this.root = addNode(this.root, value);
    } catch (err) {
      console.error("Add error:", err);
    }
  }
  Add(value) {
    return this.add(value);
  }

  contains(value) {
    try {
      const containsNode = (node, val) => {
        if (!node) return false;
        if (val === node.data) return true;
        if (val < node.data) return containsNode(node.left, val);
        return containsNode(node.right, val);
      };
      return containsNode(this.root, value);
    } catch (err) {
      console.error("Contains error:", err);
      return false;
    }
  }
  Contains(value) {
    return this.contains(value);
  }

  remove(value) {
    try {
      const removeNode = (node, val) => {
        if (!node) return null;
        if (val < node.data) {
          node.left = removeNode(node.left, val);
          return node;
        } else if (val > node.data) {
          node.right = removeNode(node.right, val);
          return node;
        } else {
          // node to remove
          if (!node.left && !node.right) return null;
          if (!node.left) return node.right;
          if (!node.right) return node.left;

          // find smallest node in right subtree
          let temp = node.right;
          while (temp.left) temp = temp.left;
          node.data = temp.data;
          node.right = removeNode(node.right, temp.data);
          return node;
        }
      };
      this.root = removeNode(this.root, value);
    } catch (err) {
      console.error("Remove error:", err);
    }
  }
  Remove(value) {
    return this.remove(value);
  }

  print() {
    try {
      const helper = new BinaryTree();
      helper.root = this.root;
      helper.print();
    } catch (err) {
      console.error("Print error:", err);
    }
  }
}

module.exports = BinarySearchTree;
