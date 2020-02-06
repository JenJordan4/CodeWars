function highAndLow(numbers){

  const newArray = numbers.split(" ").sort(function(a, b){return b-a})
  return newArray[0] + " " + newArray[(newArray.length-1)]
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")