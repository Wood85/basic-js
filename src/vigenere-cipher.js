const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(direct = true) {
		this.direct = direct;
		this.reverse = !direct;
		this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}

	fullKey(message, key) {
		let fullKey = '';
		let times = Math.floor(message.length / key.length);
		const rest = message.length - (times * key.length);
		for (let i = 0; i < times; i++) {
			fullKey += key;
		}
		for (let i = 0; i < rest; i++) {
			fullKey += key[i];
		}
		let arr = fullKey.split('');
		for (let i = 0; i < message.length; i++) {
			if (this.alphabet.indexOf(message[i]) === -1) {
				arr.splice(i, 0, ' ');
			}
		}
		fullKey = arr.join('')
		return fullKey;
	}

	transformKey(key) {
		return key.split('').map((char) => this.alphabet.indexOf(char));
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}

		message = message.toUpperCase();
		key = key.toUpperCase();
		const fullKey = this.fullKey(message, key);
		const transformKey = this.transformKey(fullKey);

		let result = '';

		for (let i = 0; i < message.length; i++) {
			let codeIndex = this.alphabet.indexOf(message[i]) + transformKey[i];
			if (this.alphabet.indexOf(message[i]) === -1) {
				result += message[i];
				continue;
			}
			if (codeIndex > 25) {
				codeIndex = codeIndex - 26;
			}
			result += this.alphabet[codeIndex];
		}
		if (this.direct === false) {
			return result.split('').reverse().join('');
		}

		return result;
	}
	decrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}
		message = message.toUpperCase();
		key = key.toUpperCase();

		const fullKey = this.fullKey(message, key);
		const transformKey = this.transformKey(fullKey);

		let result = '';

		for (let i = 0; i < message.length; i++) {
			let codeIndex = this.alphabet.indexOf(message[i]) + 26 - transformKey[i];
			if (this.alphabet.indexOf(message[i]) === -1) {
				result += message[i];
				continue;
			}
			if (codeIndex > 25) {
				codeIndex = codeIndex - 26;
			}
			result += this.alphabet[codeIndex];
		}
		if (this.direct === false) {
			return result.split('').reverse().join('');
		}

		return result;
	}
}

module.exports = {
	VigenereCipheringMachine
};
