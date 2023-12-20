const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function sumOfDigits(n) {
	let sum;
	sum = n.toString().split('').map((i) => Number(i)).reduce((acc, val) => acc + val, 0);
	while (sum > 9) {
		const arr = [...sum.toString()].map((i) => Number(i));
		sum = arr.reduce((acc, val) => acc + val, 0);
	}
	return sum;

}

module.exports = {
	getSumOfDigits
};
