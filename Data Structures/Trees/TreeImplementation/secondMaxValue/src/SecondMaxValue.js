const BinaryTree = require("../../src/BinaryTree");

class SecondMaxBinaryTree extends BinaryTree {
  constructor(root = null) {
    super(root);
  }

  findSecondMax() {
    if (!this.root) return null;

    let max = null;
    let second = null;

    const traverse = (node) => {
      if (!node) return;
      const val = node.data;

      if (max === null || val > max) {
        if (max !== null && max !== val) second = max;
        max = val;
      } else if (val < max) {
        if (second === null || val > second) second = val;
      }

      traverse(node.left);
      traverse(node.right);
    };

    try {
      traverse(this.root);
      return second === null ? null : second;
    } catch (err) {
      console.error("findSecondMax error:", err);
      return null;
    }
  }
}

module.exports = SecondMaxBinaryTree;
