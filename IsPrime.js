const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  for (let i = 2; i < n; i++) {
    // if we put <= everithun crashes
    if (n % i === 0) return false;
  }
  return true;
};

// Test cases
console.log("Testing isPrime function:");
console.log("isPrime(0):", isPrime(0)); // false (less than 2)
console.log("isPrime(1):", isPrime(1)); // false (less than 2)
console.log("isPrime(2):", isPrime(2)); // true (smallest prime)
console.log("isPrime(3):", isPrime(3)); // true
console.log("isPrime(4):", isPrime(4)); // false (2 x 2)
console.log("isPrime(7):", isPrime(7)); // true
console.log("isPrime(9):", isPrime(9)); // false (3 x 3)
console.log("isPrime(10):", isPrime(10)); // false (2 x 5)
console.log("isPrime(11):", isPrime(11)); // true
console.log("isPrime(17):", isPrime(17)); // true
