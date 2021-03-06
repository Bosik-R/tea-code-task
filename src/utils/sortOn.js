export const sortOn = (property) => {
	return function (a, b) {
		if (a[property] < b[property]) {
			return -1;
		} else if (a[property] > b[property]) {
			return 1;
		} else {
			return 0;
		}
	};
};
