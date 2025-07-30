const array = [5, 9, 4, 8, 6, 2, 1];

// function to compare and return the smaller value
function getSmallerValue(a, b) {
  return a < b ? a : b;
}

// function to find the minimum value in an array
function minimumValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    min = getSmallerValue(arr[i], min);
  }
  return min;
}
