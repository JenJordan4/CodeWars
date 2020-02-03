// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 
//This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome.

// Examples:
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

function isPalindrome(line) {
  const lineString = line.toString()
  const lineReverse = lineString.split('').reverse().join('')

  if (lineString === lineReverse) {
    return true
  } else {
    return false
  }
  
 }
 
 isPalindrome("anna")
 isPalindrome(123456)


 //Consolidated function
 function isPalindrome(line) {
  const lineString = line.toString()
  const lineReverse = lineString.split('').reverse().join('')

  return (lineString === lineReverse)
  
 }