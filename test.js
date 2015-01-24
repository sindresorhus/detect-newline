'use strict';
var assert = require('assert');
var detectNewline = require('./');

it('should return the used newline character', function () {
	assert.equal(detectNewline('foo\r\nbar\r\nbaz\n\n\n'), '\n');
	assert.equal(detectNewline('foo\r\nbar\r\nbaz\n'), '\r\n');
	assert.equal(detectNewline('foo\nbar\nbaz\r\n'), '\n');
	assert.equal(detectNewline('foo\nbar\r\n'), '\n');
});
