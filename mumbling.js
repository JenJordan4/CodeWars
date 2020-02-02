// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = s.toString().split("").map(x => x.toLowerCase())
  let result = ""

  for (i=0; i < arr.length; i++) {   //treat each letter individually in s
    let substring = ""
    
    for (j=0; j < i+1; j++) {        //for loop for the number of times that is j to i+1
      // Add the letter to that string
      if (j===0) {
        substring += arr[i].toUpperCase()
      } else {
        substring += arr[i]
      }
    }
    if (i===0) { 
      result += substring
    } else {
      result += "-" + substring
    }
  }

  return result
}

accum("ZpglnRxqenU")  