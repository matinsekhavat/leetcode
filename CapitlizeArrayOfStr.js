const CaptilizeSentence = (str) => {
  if (!str || typeof str !== "string") return;
  let makeWord = str.split(" ");

  return makeWord.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  });
};

console.log(CaptilizeSentence("salam matin sekhavat"));
