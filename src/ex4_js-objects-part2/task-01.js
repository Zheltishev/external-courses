function searchAndReturnPropInProto(prop, obj) {
  return Object.getPrototypeOf(obj)[prop];
}

module.exports = searchAndReturnPropInProto;
