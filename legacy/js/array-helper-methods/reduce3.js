const word = "BLESSINGS";

const wordValues = (word) => {
  const letters = word.split("");
  return letters.reduce((tally, letter) => {
    if (tally[letter]) {
      tally[letter]++;
    } else {
      tally[letter] = 1;
    }
    return tally;
  }, {});
};

const wordValues2 = (word) => {
  letters = word.split("");
  letterObj = {};
  letters.forEach((letter) => {
    if (letterObj[letter]) {
      letterObj[letter]++;
    } else {
      letterObj[letter] = 1;
    }
  });
  return letterObj;
};

const wordValues3 = (word) => {
  const letters = word.split("");
  letterObj = {};
  for (let i = 0; i < letters.length; i++) {
    if (letterObj[word[i]]) {
      letterObj[word[i]]++;
    } else {
      letterObj[word[i]] = 1;
    }
  }
  return letterObj;
};

const wordValues4 = (word) => {
  const letters = word.split("");
  return letters.reduce((letterObj, value) => {
    letterObj[value] = (letterObj[value] || 0) + 1;
    return letterObj;
  }, {});
};

console.log(wordValues(word));
console.log(wordValues2(word));
console.log(wordValues3(word));
console.log(wordValues4(word));
