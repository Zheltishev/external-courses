function getMaxNumberArray(arr) {
  let getMaxNumber = arr[0];

  arr.forEach((element) => {
    if (element > getMaxNumber) {
      getMaxNumber = element;
    }
  });

  return getMaxNumber;
};

module.exports = getMaxNumberArray;
