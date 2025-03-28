const isPalindrom = (str) => {
  return [...str].reverse().join("") === str;
};

const isPalindrom2 = (str) => {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed === str;
};

const isPalindrom3 = (str) => {
  return str.split("").reverse().join("") === str;
};

console.log(isPalindrom2("racecar"));
console.log(isPalindrom2("hello"));
console.log(isPalindrom3("racecar"));
console.log(isPalindrom3("hello"));
