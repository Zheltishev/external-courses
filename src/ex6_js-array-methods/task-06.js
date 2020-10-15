function analogReduce(array, callback, initialValue) {
  let index = 1;
  let val = array[0];

  if (initialValue !== undefined) {
    val = initialValue;
    index = 0;
  }

  for (index; index < array.length; index++) {
    val = callback(val, array[index], index, array);
  }

  return val;
}

module.exports = analogReduce;
