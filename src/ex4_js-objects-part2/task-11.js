function countLetterInString(str) {
  const count = {};

  str.split('')
    .forEach((element) => {
      if (!count.hasOwnProperty(element)) {
        count[element] = 1;
      } else {
        count[element]++;
      }
    });

  for (let key in count) {
    console.log(`${key} - ${count[key]}`);
  };

  return;
};

module.exports = countLetterInString;
