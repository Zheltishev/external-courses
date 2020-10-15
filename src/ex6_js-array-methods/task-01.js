function analogSlice(array, begin = 0, end = array.length) {
  const newArr = [];
  let start = begin;
  let finish = end;

  if (begin < 0) {
    start = begin + array.length;
  }

  if (start < 0) {
    start = 0;
  }

  if (end < 0) {
    finish = end + array.length;
  }

  for (let i = start; i < finish; i++) {
    newArr.push(array[i]);
  }

  return newArr;
}

module.exports = analogSlice;
