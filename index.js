'use strict';
const detectNewline = string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	const newlines = string.match(/(?:\r?\n)/g) || [];

	if (newlines.length === 0) {
		return null;
	}

	const crlf = newlines.filter(el => el === '\r\n').length;
	const lf = newlines.length - crlf;

	return crlf > lf ? '\r\n' : '\n';
};

module.exports = detectNewline;
module.exports.graceful = string => detectNewline(string) || '\n';
