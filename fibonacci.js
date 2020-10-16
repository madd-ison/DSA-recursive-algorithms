const fibonacci = function(n) {
    // base
    if (n <= 0) {
      return 0;
    }
    // base
    if (n <= 2) {
      return 1;
    }	
    // general
    return fibonacci(n - 1) + fibonacci(n - 2);	
  }
  let n = 6
  console.log(fibonacci(n))
 // 8