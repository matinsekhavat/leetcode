const isPrime = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

console.log(isPrime(13));
console.log(isPrime(10));
