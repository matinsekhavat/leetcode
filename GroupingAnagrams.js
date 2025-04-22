const AnagramList = ["at", "zz", "sm", "ma", "tm", "ms"];

const groupAnagrams = (list) => {
  let reversedString = "";
  let anagramGroup = [];
  for (const word of list) {
    reversedString = word.split("").reverse().join("");
    if (list.includes(reversedString)) {
      anagramGroup.push(word);
    }
  }
  console.log(anagramGroup);
};

groupAnagrams(AnagramList);
