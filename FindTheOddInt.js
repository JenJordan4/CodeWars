// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  //make an empty dictionary
  let obj = {}
  //first number in the array is first key
  //If the dictionary has it, increase the count by 1
  for (num of A){
    obj[num] ? obj[num]++ : obj[num] = 1
  }

  for (key in obj) {   //if value % 2 === 1, return that number
    if (obj[key] % 2 === 1){
      return Number(key) //turn the key into a number
    }
  }

 }

 findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) //returns 5