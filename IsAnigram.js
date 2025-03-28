const isAnigram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let sortedOne = [...str1].sort((a, b) => a.localeCompare(b)).join("");
  let sortedTwo = [...str2].sort((a, b) => a.localeCompare(b)).join("");
  return sortedOne === sortedTwo;
};

// TODO : handle this
// const isAnigram2 = (str1, str2) => {
//   let result = "";
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; i++) {}
//   }
//   return result;
// };

console.log(isAnigram("act", "ca")); // false
