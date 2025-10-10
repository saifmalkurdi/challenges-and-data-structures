const BinarySearchTree = require("../src/BinarySearchTree");

describe("BinarySearchTree (Add, Contains, Remove)", () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test("adding a node (Add) places it in the tree", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
  });

  test("checking if a node exists (Contains)", () => {
    bst.add(7);
    bst.add(3);
    bst.add(9);
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(3)).toBe(true);
    expect(bst.contains(9)).toBe(true);
    expect(bst.contains(100)).toBe(false);
  });

  test("removing a node (Remove) keeps BST property and removes value", () => {
    [10, 5, 15, 3, 7, 12, 17].forEach((v) => bst.add(v));

    bst.remove(3);
    expect(bst.contains(3)).toBe(false);

    bst.remove(15);
    expect(bst.contains(15)).toBe(false);

    bst.remove(10);
    expect(bst.contains(10)).toBe(false);

    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(12)).toBe(true);
    expect(bst.contains(17)).toBe(true);
  });
});
