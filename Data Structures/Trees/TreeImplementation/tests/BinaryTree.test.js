const BinaryTree = require("../src/BinaryTree");
const TNode = require("../src/TNode");

describe("BinaryTree (traversals)", () => {
  let bt;
  beforeEach(() => {
    bt = new BinaryTree();
    bt.root = new TNode(1);
    bt.root.left = new TNode(2);
    bt.root.right = new TNode(3);
    bt.root.left.left = new TNode(4);
    bt.root.left.right = new TNode(5);
  });

  test("pre-order traversal (Root, Left, Right)", () => {
    // expected: [1,2,4,5,3]
    expect(bt.preOrder()).toEqual([1, 2, 4, 5, 3]);
  });

  test("in-order traversal (Left, Root, Right)", () => {
    // expected: [4,2,5,1,3]
    expect(bt.inOrder()).toEqual([4, 2, 5, 1, 3]);
  });

  test("post-order traversal (Left, Right, Root)", () => {
    // expected: [4,5,2,3,1]
    expect(bt.postOrder()).toEqual([4, 5, 2, 3, 1]);
  });
});
