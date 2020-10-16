// sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

const triangular = function(n) {
  if (n < 2) {
    return n
  }
  return n + triangular(n-1)
}

console.log(triangular(5))
// 15