function deepCopyObject(object) {
  let copyObject;

  if (Array.isArray(object)) {
    copyObject = [];
  } else {
    copyObject = {};
  };

  for (let key in object) {
    if (typeof object[key] === "object") {
      copyObject[key] = deepCopyObject(object[key]);
    } else {
      copyObject[key] = object[key];
    }
  };

  return copyObject;
}

module.exports = deepCopyObject;
