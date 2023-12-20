const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	getLength() {
		throw new NotImplementedError('Not implemented');
	},
	addLink(/*value*/) {
		throw new NotImplementedError('Not implemented');
	},
	removeLink(/*position*/) {
		throw new NotImplementedError('Not implemented');
	},
	reverseChain() {
		throw new NotImplementedError('Not implemented');
	},
	finishChain() {
		throw new NotImplementedError('Not implemented');
	}
};

module.exports = {
	chainMaker
};
