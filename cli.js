#!/usr/bin/env node
'use strict';
var getStdin = require('get-stdin');
var meow = require('meow');
var detectNewline = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ detect-newline <string>',
		'  $ cat unicorn.txt | detect-newline',
		'',
		'Example',
		'  $ detect-newline "$(printf \'Unicorns\\nRainbows\')"',
		'  \\n'
	]
});

function init(data) {
	process.stdout.write(detectNewline(data));
}

if (process.stdin.isTTY) {
	if (!cli.input[0]) {
		console.error('Expected a string');
		process.exit(1);
	}

	init(cli.input[0]);
} else {
	getStdin(init);
}
