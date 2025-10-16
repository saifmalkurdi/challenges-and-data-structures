const SecondMaxBinaryTree = require("./SecondMaxValue");
const TNode = require("../../src/TNode");

console.log("=== Find Second Max Value in Binary Tree ===");

const tree = new SecondMaxBinaryTree();
tree.root = new TNode(10);
tree.root.left = new TNode(5);
tree.root.right = new TNode(20);
tree.root.left.left = new TNode(3);
tree.root.left.right = new TNode(7);
tree.root.right.left = new TNode(15);
tree.root.right.right = new TNode(25);

tree.print();

const secondMax = tree.findSecondMax();
console.log("\nSecond maximum value is:", secondMax);
