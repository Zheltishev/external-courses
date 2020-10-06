function createObjWithoutPrototype() {
  return Object.create(null);
};

module.exports = createObjWithoutPrototype;
