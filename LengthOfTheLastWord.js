const lengthOfLastWord1 = (s) => {
  const [, last] = s.trim().split(" ");
  return last.length;
};

const lengthOfLastWord2 = (s) => {
  const words = s.trim().split(" ");
  return words.at(-1).length;
};

const lengthOfLastWord3 = (s) => {
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
};

const lengthOfLastWord4 = (s) => {
  let currentWord = "";

  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] === " ") {
      return currentWord.length;
    }
    currentWord = s[i] + currentWord;
  }
};
