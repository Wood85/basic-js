const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
	let indexOfSeparator;
	for (let i = 0; i < email.length; i++) {
		if (email[i] === '@') {
			indexOfSeparator = i;
		}
	}
	return email.slice(indexOfSeparator + 1)
}

module.exports = {
	getEmailDomain
};
