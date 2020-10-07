function integrationStringInString(firstString, secondString, num) {
  let concatString = firstString.split(' ');

  if (concatString[num]) {
    concatString[num] += ` ${secondString}`;
  };

  return concatString.join(' ');
};

module.exports = integrationStringInString;
