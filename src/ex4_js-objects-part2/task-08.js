function lowerCamelCaseString(str) {
  let newStr = str;

  newStr = newStr.split(' ')
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    })
    .join('');

  return newStr.charAt(0).toLowerCase() + newStr.slice(1);
};

module.exports = lowerCamelCaseString;
