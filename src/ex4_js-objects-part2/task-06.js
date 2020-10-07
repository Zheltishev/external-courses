function returnWordWithUppercaseFirstLetter(str) {
  return str.split(' ')
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    })
    .join(' ');
}

module.exports = returnWordWithUppercaseFirstLetter;
