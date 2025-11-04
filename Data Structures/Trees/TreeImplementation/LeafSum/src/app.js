const LeafSumBinaryTree = require("./LeafSum");
const TNode = require("../../src/TNode");

console.log("=== Sum of Leaf Nodes in Binary Tree ===\n");

const Btree = new LeafSumBinaryTree();
Btree.root = new TNode(9);
Btree.root.left = new TNode(8);
Btree.root.right = new TNode(12);
Btree.root.left.left = new TNode(3);
Btree.root.left.right = new TNode(7);
Btree.root.right.left = new TNode(17);
Btree.root.right.right = new TNode(23);
Btree.root.left.left.right = new TNode(4);

console.log("Binary Tree Structure:");
Btree.print();

const leafSum = Btree.SumOfLeafNodes();
console.log("\n=== Result ===");
console.log("Leaf nodes are: 4, 7, 17, and 23");
console.log("Sum = 4 + 7 + 17 + 23 = 51");
console.log(`\nCalculated Sum of Leaf Nodes: ${leafSum}`);
