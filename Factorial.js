const factorial = (n) => {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

const factorial2 = (n) => {
  let factorial = 1;
  for (let i = n; i > 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

console.log(factorial(3));
console.log(factorial2(3));
