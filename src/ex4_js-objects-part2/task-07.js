function stringLengthBYNumber(str, num) {
  let newStr = str;

  if (newStr.length > num) {
    newStr = newStr.slice(0, num - 1) + '…';
  };

  return newStr;
};

module.exports = stringLengthBYNumber;
