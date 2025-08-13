// [1, 1, 2, 2, 3, 3, 1]
function MostFrequentNumber(arr) {
  const countMap = {};
  let maxCount = 0;
  let mostFrequent = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    countMap[num] = (countMap[num] || 0) + 1;

    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      mostFrequent = num;
    }
  }

  return mostFrequent;
  
}





