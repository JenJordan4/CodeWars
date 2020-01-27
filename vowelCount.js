// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  const splitStr = str.toLowerCase().split("");
  for (letter of splitStr) {
    if  (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      vowelsCount++;
    } 
  }
  return vowelsCount;
}

getCount(JENNIFER)