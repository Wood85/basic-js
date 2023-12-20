const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let countChar = 1;
	const codeArr = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			countChar++;
		}
		if (str[i] !== str[i + 1]) {
			let count;
			if (countChar === 1) { count = ''; }
			if (countChar !== 1) { count = countChar; }
			codeArr.push(`${count}${str[i]}`);
			countChar = 1;
		}
	}
	return codeArr.join('');
}

module.exports = {
	encodeLine
};
