const prefix = (words) => {
  // Edge cases
  if (!words || words.length === 0) return "";
  if (words.length === 1) return words[0];

  let prefixCounter = 0;
  let prefixString = "";

  // Check characters at each position
  while (prefixCounter < words[0].length) {
    let currentLetter = words[0][prefixCounter];

    // Check if all words have the same character at this position
    for (let i = 1; i < words.length; i++) {
      // If we've reached the end of any word or characters don't match
      if (
        prefixCounter >= words[i].length ||
        words[i][prefixCounter] !== currentLetter
      ) {
        return prefixString;
      }
    }

    // If all words match at this position, add to our prefix
    prefixString += currentLetter;
    prefixCounter++;
  }

  return prefixString;
};

console.log(prefix(["pref", "preset", "prematch"]));
