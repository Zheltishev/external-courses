function arrayElementInfo(elem) {
	console.log(`Array length: ${elem.length}`);
	elem.forEach((element) => console.log(element));

	return;
};

module.exports = arrayElementInfo;
