const BinaryTree = require("./BinaryTree");
const BinarySearchTree = require("./BinarySearchTree");
const TNode = require("./TNode");

console.log("=== BinaryTree Example ===");
const bt = new BinaryTree();
bt.root = new TNode(1);
bt.root.left = new TNode(2);
bt.root.right = new TNode(3);
bt.root.left.left = new TNode(4);
bt.root.left.right = new TNode(5);
bt.root.right.left = new TNode(6);

console.log("Pre-order:", bt.preOrder());
console.log("In-order:", bt.inOrder());
console.log("Post-order:", bt.postOrder());
console.log("\nBinaryTree structured:");
bt.print();

console.log("\n=== BinarySearchTree Example ===");
const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(7);

console.log("Contains 7? ->", bst.contains(7));
console.log("Contains 5? ->", bst.contains(5));

console.log("\nBST before removing 5:");
bst.print();

bst.remove(5);
console.log("\nBST after removing 5:");
bst.print();
console.log("Contains 5? ->", bst.contains(5));
