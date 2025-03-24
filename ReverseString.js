// const reverseString = (str) => {
//   return [...str].reverse().join("");
// };

// const reverseString = (str) => {
//   let reversed = "";

//   for (char of str) {
//     reversed = char + reversed;
//     // reversed = h + "" = h
//     // reversed = e + h = eh
//     // reversed = l + eh = leh
//     // reversed = l + leh = lleh
//     // reversed = o + lleh = olleh
//   }
//   return reversed;
// };

// const reverseString = (str) => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = str[i] + reversed; //hello
//     reversed = reversed + str[i]; //olleh
//   }
//   return reversed;
// };

// const reverseString = (str) => {
//   let reverse = "";
//   for (i = 0; i <= str.length - 1; i++) {
//     reverse = str[i] + reverse;
//   }
//   return reverse;
// };

console.log(reverseString("hello"));
