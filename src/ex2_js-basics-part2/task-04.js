function sameElement(arr) {
	for (let element in arr) {
		if (arr[element] !== arr[0]) {

			return false;
		}
	};

	return true;
}

module.exports = sameElement;
