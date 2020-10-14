function analogFilter(array, callback) {
  const copyArr = [];

  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      copyArr.push(array[index]);
    }
  }

  return copyArr;
}

module.exports = analogFilter;
