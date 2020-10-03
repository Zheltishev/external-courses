function checkStrInObjPropAndAdd(str, objProp) {
  const obj = objProp;

  if (!obj.hasOwnProperty(str)) {
    obj[str] = 'new';
  };

  return obj;
}

module.exports = checkStrInObjPropAndAdd;
