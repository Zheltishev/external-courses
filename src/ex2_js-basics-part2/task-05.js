function getMaxNumberArray(arr) {
  let maxNumber = arr[0];

  arr.forEach((element) => {
    if (element > maxNumber) {
      maxNumber = element;
    }
  });

  return maxNumber;
};

module.exports = getMaxNumberArray;
