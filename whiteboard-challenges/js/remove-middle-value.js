function getMiddleIndex(arr) {
  return Math.floor(arr.length / 2); // works for both even and odd number
}

function shiftLeft(arr, startIndex) {
  for (let i = startIndex; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
}

function RemoveMiddleValue(arr) {
  if (arr.length === 0) return arr;

  const middleIndex = getMiddleIndex(arr); // 2
  shiftLeft(arr, middleIndex);
  arr.length = arr.length - 1; // Remove last duplicate after shifting

  return arr;
}

console.log(RemoveMiddleValue([1, 2, 3, 4, 5])); // [1, 2, 4, 5]
console.log(RemoveMiddleValue([27, 8, 15, 73, 27])); // [27, 8, 73, 27]
console.log(RemoveMiddleValue([7, 9, 13, 25, 5, 17])); // [7, 9, 13, 5, 17]
