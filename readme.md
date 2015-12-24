# detect-newline [![Build Status](https://travis-ci.org/sindresorhus/detect-newline.svg?branch=master)](https://travis-ci.org/sindresorhus/detect-newline)

> Detect the dominant newline character of a string


## Install

```
$ npm install --save detect-newline
```


## Usage

```js
const detectNewline = require('detect-newline');

detectNewline('foo\nbar\nbaz\r\n');
//=> '\n'
```

Returns `undefined` when no newline character is found.


## CLI

```
$ npm install --global detect-newline
```

```
$ detect-newline --help

  Usage
    $ detect-newline <string>
    $ cat unicorn.txt | detect-newline

  Example
    $ detect-newline "$(printf 'Unicorns\nRainbows')"
    \n
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
