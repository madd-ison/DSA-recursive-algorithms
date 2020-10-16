// ex.
// input: 5
// output: (5*4*3*2*1) = 120

const factorial = (n) => {
  // base
  if (n === 1) {
    return n
  } 
  // general
  return n * factorial(n-1)
}

let n = 3
console.log(factorial(n))
// 6