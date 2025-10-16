const SecondMaxBinaryTree = require("../src/SecondMaxValue");
const TNode = require("../../src/TNode");

describe("SecondMaxBinaryTree.findSecondMax", () => {
  test("finds the second max (example tree)", () => {
    const bt = new SecondMaxBinaryTree();
    bt.root = new TNode(10);
    bt.root.left = new TNode(5);
    bt.root.right = new TNode(20);
    bt.root.left.left = new TNode(3);
    bt.root.left.right = new TNode(7);
    bt.root.right.left = new TNode(15);
    bt.root.right.right = new TNode(25);
    expect(bt.findSecondMax()).toBe(20);
  });

  test("returns null for single node tree", () => {
    const bt = new SecondMaxBinaryTree();
    bt.root = new TNode(10);
    expect(bt.findSecondMax()).toBeNull();
  });

  test("works with negative values", () => {
    const bt = new SecondMaxBinaryTree();
    bt.root = new TNode(-10);
    bt.root.left = new TNode(-20);
    bt.root.right = new TNode(-5);
    expect(bt.findSecondMax()).toBe(-10);
  });
});
