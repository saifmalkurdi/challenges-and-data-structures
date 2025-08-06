function reverseCharacters(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]; // newStr = newStr + str[i]
  }

  return newStr;
}

console.log(reverseCharacters("hello"));
