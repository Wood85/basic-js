const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("\'arr\' parameter must be an instance of the Array!");
	}
	const copy = [];
	for (let i = 0; i < arr.length; i++) {
		copy.push(arr[i]);
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-prev') {
			delete copy[i];
			delete copy[i - 1];
		}
		if (arr[i] === '--discard-next') {
			delete copy[i];
			delete copy[i + 1];
		}
		if (arr[i] === '--double-prev') {
			copy[i] = arr[i - 1];
		}
		if (arr[i] === '--double-next') {
			copy[i] = arr[i + 1];
		}
	}
	const filteredCopy = copy.filter((item) => item !== undefined);
	return filteredCopy;
}
module.exports = {
	transform
};
