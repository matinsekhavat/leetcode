const CaptilizeSentence = (sentence) => {
  const words = sentence.split(" ");
  let result = [];
  for (const word of words) {
    const Capitlize = word[0].toUpperCase().concat(word.slice(1));
    result = [...result, Capitlize];
  }
  return result.join(" ");
};

console.log(CaptilizeSentence("salam matin"));
