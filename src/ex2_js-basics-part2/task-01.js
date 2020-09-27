function typeChecking(elem) {
	let typeData = typeof elem;

	switch (typeData) {
		case 'number': {
			if (isNaN(elem)) {
				return undefined;
			}

			return 'number';
		}
		case 'string': {
			return 'string';
		}
		default: {
			return undefined;
		}
	}
}

module.exports = typeChecking
