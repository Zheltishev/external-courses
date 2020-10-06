function countLetterInString(str) {
  const count = {};
  let newStr = str.split('');

  newStr.forEach((element) => {
    if (!count.hasOwnProperty(element)) {
      count[element] = 1;
    };

    count[element]++;
  });

  for (let key in count) {
    console.log(`${key} - ${count[key]}`);
  };

  return;
};

module.exports = countLetterInString;
