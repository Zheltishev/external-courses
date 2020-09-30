function sameElement(arr) {
	const firstElementArray = arr[0]

	for (let element in arr) {
		if (arr[element] !== firstElementArray) {
			return false;
		}
	};

	return true;
}

module.exports = sameElement;
