const LeafSumBinaryTree = require("../src/LeafSum");
const TNode = require("../../src/TNode");

describe("LeafSumBinaryTree - SumOfLeafNodes", () => {
  test("should calculate the sum of all leaf nodes in the provided example tree", () => {
    const tree = new LeafSumBinaryTree();
    tree.root = new TNode(9);
    tree.root.left = new TNode(8);
    tree.root.right = new TNode(12);
    tree.root.left.left = new TNode(3);
    tree.root.left.right = new TNode(7);
    tree.root.right.left = new TNode(17);
    tree.root.right.right = new TNode(23);
    tree.root.left.left.right = new TNode(4);

    // Leaf nodes: 4, 7, 17, 23 => Sum = 51
    expect(tree.SumOfLeafNodes()).toBe(51);
  });

  test("should calculate the sum of leaf nodes with negative values", () => {
    const tree = new LeafSumBinaryTree();
    tree.root = new TNode(10);
    tree.root.left = new TNode(5);
    tree.root.right = new TNode(15);
    tree.root.left.left = new TNode(-3);
    tree.root.left.right = new TNode(-7);
    tree.root.right.left = new TNode(20);
    tree.root.right.right = new TNode(-10);

    // Leaf nodes: -3, -7, 20, -10 => Sum = 0
    expect(tree.SumOfLeafNodes()).toBe(0);
  });

  test("should return 0 for an empty tree", () => {
    const tree = new LeafSumBinaryTree();
    expect(tree.SumOfLeafNodes()).toBe(0);
  });

  test("should return the root value for a tree with only one node", () => {
    const tree = new LeafSumBinaryTree();
    tree.root = new TNode(42);
    expect(tree.SumOfLeafNodes()).toBe(42);
  });

  test("should handle tree where all nodes are on one side", () => {
    const tree = new LeafSumBinaryTree();
    tree.root = new TNode(1);
    tree.root.left = new TNode(2);
    tree.root.left.left = new TNode(3);
    tree.root.left.left.left = new TNode(4);

    // Only leaf node: 4
    expect(tree.SumOfLeafNodes()).toBe(4);
  });

  test("should handle tree with multiple negative leaf nodes", () => {
    const tree = new LeafSumBinaryTree();
    tree.root = new TNode(0);
    tree.root.left = new TNode(-5);
    tree.root.right = new TNode(-10);
    tree.root.left.left = new TNode(-15);
    tree.root.left.right = new TNode(-20);

    // Leaf nodes: -15, -20, -10 => Sum = -45
    expect(tree.SumOfLeafNodes()).toBe(-45);
  });

  test("should handle tree with mixed positive and negative leaf nodes", () => {
    const tree = new LeafSumBinaryTree();
    tree.root = new TNode(100);
    tree.root.left = new TNode(50);
    tree.root.right = new TNode(-50);
    tree.root.left.left = new TNode(25);
    tree.root.left.right = new TNode(-25);
    tree.root.right.left = new TNode(10);
    tree.root.right.right = new TNode(-10);

    // Leaf nodes: 25, -25, 10, -10 => Sum = 0
    expect(tree.SumOfLeafNodes()).toBe(0);
  });
});
