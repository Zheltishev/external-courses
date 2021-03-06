function analogSlice(array, begin = 0, end = array.length) {
  const newArr = [];
  let finish = end;
  let start = begin;

  if (begin < 0) {
    start = begin + array.length;
  }

  if (start < 0) {
    start = 0;
  }

  if (end < 0) {
    finish = end + array.length;
  }

  if (finish > array.length) {
    finish = array.length;
  }

  for (let i = start; i < finish; i++) {
    newArr.push(array[i]);
  }

  return newArr;
}

module.exports = analogSlice;
