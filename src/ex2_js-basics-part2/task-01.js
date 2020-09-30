function typeChecking(elem) {
	const typeData = typeof elem;
	const typeNumber = 'number';
	const typeString = 'string';

	switch (typeData) {
		case typeNumber: {
			if (isNaN(elem)) {
				return undefined;
			}

			return typeNumber;
		}
		case typeString: {
			return typeString;
		}
		default: {
			return undefined;
		}
	}
};

module.exports = typeChecking;
