function deleteSpaceInString(str) {
  const space = ' ';
  let newStr = str;

  if (newStr.charAt(0) === space) {
    newStr = newStr.slice(1);
  };

  if (newStr.charAt(newStr.length - 1) === space) {
    newStr = newStr.slice(0, -1)
  };

  return newStr;
};

module.exports = deleteSpaceInString;
