function compare(str, obj) {
  if (str in obj) {
    return true;
  };

  return false;
}

module.exports = compare;
