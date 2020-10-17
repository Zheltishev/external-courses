function analogMap(array, callback) {
  const copyArr = [];

  for (let index = 0; index < array.length; index++) {
    copyArr.push(callback(array[index], index, array));
  }

  return copyArr;
}

module.exports = analogMap;
