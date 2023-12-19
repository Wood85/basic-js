const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	if (options.addition === false) {
		options.addition = `${options.addition}`;
	}
	if (options.addition === null) {
		options.addition = `${options.addition}`;
	}
	if (!options.separator) {
		options.separator = '+';
	}
	if (!options.addition) {
		options.addition = '';
	}
	str = `${str}`;
	options.addition = `${options.addition}`;
	if (!options.additionSeparator) {
		options.additionSeparator = '|';
	}
	if (!options.repeatTimes) {
		options.repeatTimes = 1;
	}
	if (!options.additionRepeatTimes) {
		options.additionRepeatTimes = 1;
	}

	let res = [];
	for (let i = 0; i < options.repeatTimes; i++) {
		res.push(str);

		let add = [];
		for (let j = 0; j < options.additionRepeatTimes; j++) {
			add.push(options.addition);
			add.push(options.additionSeparator);
		}
		add = add.slice(0, -1);
		res.push(add);
		add = []
		res.push(options.separator);
	}
	return res.slice(0, -1).flat().join('');
}

module.exports = {
	repeater
};
