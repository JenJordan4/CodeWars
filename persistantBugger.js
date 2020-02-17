function persistence(num) {
  let counter = 0
  while (num > 9) {
    num = multiplyTogether(num)
    counter++
  }
  return counter
}

function multiplyTogether(num){
  return Array.from(num.toString()).map(Number).reduce( (a,b) => a * b )
}