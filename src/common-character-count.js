const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	const arr1 = s1.split('');
	const arr2 = s2.split('');
	const l1 = arr1.length;
	const l2 = arr2.length;
	function match(a1, a2) {
		let count = 0;
		for (let i = 0; i < a1.length; i++) {
			for (let j = 0; j < a2.length; j++) {
				if (a1[i] === a2[j]) {
					count++;
					a2.splice(j, 1);
					break;
				}
			}
		}
		return count;
	}
	if (l1 < l2) {
		return match(arr1, arr2);
	}
	return match(arr2, arr1);
}

module.exports = {
	getCommonCharacterCount
};
