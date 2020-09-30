function parity(arr) {
	let even = 0;
	let odd = 0;
	let zero = 0;

	arr.forEach((element) => {
		let typeData = typeof element;

		if (typeData === 'number' && !isNaN(element)) {
			if (element === 0) {
				zero++;
			} else if (element % 2 === 0) {
				even++;
			} else {
				odd++;
			}
		};
	});

	return [even, odd, zero];
}

module.exports = parity;
