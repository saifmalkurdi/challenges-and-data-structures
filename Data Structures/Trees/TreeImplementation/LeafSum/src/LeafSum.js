const BinaryTree = require("../../src/BinaryTree");

class LeafSumBinaryTree extends BinaryTree {
  constructor(root = null) {
    super(root);
  }

  SumOfLeafNodes() {
    if (!this.root) return 0;

    let sum = 0;

    const traverse = (node) => {
      if (!node) return;

      // Check if it's a leaf node (no left and no right children)
      if (!node.left && !node.right) {
        sum += node.data;
      }

      traverse(node.left);
      traverse(node.right);
    };

    try {
      traverse(this.root);
      return sum;
    } catch (err) {
      console.error("SumOfLeafNodes error:", err);
      return 0;
    }
  }
}

module.exports = LeafSumBinaryTree;
