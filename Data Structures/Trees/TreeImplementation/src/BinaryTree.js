const TNode = require("./TNode");

class BinaryTree {
  constructor(root = null) {
    this.root =
      root instanceof TNode ? root : root === null ? null : new TNode(root);
  }

  preOrder() {
    try {
      const result = [];
      const traverse = (node) => {
        if (!node) return;
        result.push(node.data);
        traverse(node.left);
        traverse(node.right);
      };
      traverse(this.root);
      return result;
    } catch (err) {
      console.error("preOrder error:", err);
      return [];
    }
  }

  inOrder() {
    try {
      const result = [];
      const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        result.push(node.data);
        traverse(node.right);
      };
      traverse(this.root);
      return result;
    } catch (err) {
      console.error("inOrder error:", err);
      return [];
    }
  }

  postOrder() {
    try {
      const result = [];
      const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.data);
      };
      traverse(this.root);
      return result;
    } catch (err) {
      console.error("postOrder error:", err);
      return [];
    }
  }

  print() {
    try {
      if (!this.root) {
        console.log("(empty tree)");
        return;
      }
      const lines = [];
      const build = (node, prefix = "", isLeft = true) => {
        if (!node) return;
        if (node.right)
          build(node.right, prefix + (isLeft ? "│   " : "    "), false);
        lines.push(prefix + (isLeft ? "└── " : "┌── ") + node.data);
        if (node.left)
          build(node.left, prefix + (isLeft ? "    " : "│   "), true);
      };
      build(this.root, "", true);
      console.log(lines.join("\n"));
    } catch (err) {
      console.error("print error:", err);
    }
  }
}

module.exports = BinaryTree;
