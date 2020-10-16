const powerCalculator = function(a, b) {
    if (b === 1) {
      return a;
    }
    if (b < 0) {
      return 'exponent should be >= 0'
    }
    return a * powerCalculator(a, b - 1)
  }
  
  let a = 2
  let b = 3
  console.log(powerCalculator(a, b))
  // 8