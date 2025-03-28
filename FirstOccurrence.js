const firstOccurrence = (word, needle) => {
  let index = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (word[i + j] !== needle[j]) {
          break;
        }
        if (j === needle.length - 1) {
          // we know that j completely loops over thats
          index = i;
          break;
        }
      }
    }
  }
  return index;
};

const firstOccurrence2 = (word, needle) => {
  if (needle.length === 0) return 0;
  if (needle.length > word.length) return -1;

  for (let i = 0; i <= word.length - needle.length; i++) {
    if (word[i] === needle[0]) {
      let found = true;
      for (let j = 0; j < needle.length; j++) {
        if (word[i + j] !== needle[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i;
      }
    }
  }
  return -1;
};

// console.log(firstOccurrence("matin", "at")); // 1
// console.log(firstOccurrence("matin", "in")); // 3
// console.log(firstOccurrence("matin", "isn")); // -1
// console.log(firstOccurrence("matin sekhavat", "se")); // 6

// console.log(firstOccurrence2("matin", "at")); // 1
// console.log(firstOccurrence2("matin", "in")); // 3
// console.log(firstOccurrence2("matin", "isn")); // -1
// console.log(firstOccurrence2("matin sekhavat", "se")); // 6
