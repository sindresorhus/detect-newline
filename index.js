'use strict';
module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	var newlines = (str.match(/(?:\r?\n|\r)/g) || []);
	var crlf = newlines.filter(function (el) { return el === '\r\n'; }).length;
	var cr = newlines.filter(function (el) { return el === '\r' }).length;
	var lf = newlines.length - crlf - cr;

	var max = Math.max(crlf, cr, lf);

	if (lf === max) return '\n';
	if (crlf === max) return '\r\n';
	if (cr === max) return '\r';
};
