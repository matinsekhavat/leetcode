const removeDuplicateSorted = (arr) => {
  const result = new Set(arr);
  return [...result];
};
const removeDuplicateSorted2 = (arr) => {
  const result = new Set(arr);
  return Array.from(result);
};

const removeDuplicateSorted3 = (arr) => {
  let unique = [];
  for (const item of arr) {
    if (unique.includes(item)) {
      continue;
    }
    unique.push(item);
  }
  return unique;
};

const removeDuplicateSorted4 = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log(removeDuplicateSorted([1, 1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicateSorted2([1, 1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicateSorted3([1, 1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicateSorted4([1, 1, 2, 2, 3, 4, 4, 5]));
