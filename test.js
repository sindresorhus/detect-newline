import test from 'ava';
import {detectNewline, detectNewlineGraceful} from './index.js';

test('main', t => {
	t.is(detectNewline('foo\r\nbar\r\nbaz\n\n\n'), '\n');
	t.is(detectNewline('foo\r\nbar\r\nbaz\n'), '\r\n');
	t.is(detectNewline('foo\nbar\nbaz\r\n'), '\n');
	t.is(detectNewline('foo\nbar\r\n'), '\n');
	t.is(detectNewline('foo'), undefined);
});

test('graceful', t => {
	t.is(detectNewlineGraceful('foo'), '\n');
	t.is(detectNewlineGraceful('foo\r\nbar\r\nbaz\n'), '\r\n');
	t.is(detectNewlineGraceful(null), '\n');
	t.is(detectNewlineGraceful(undefined), '\n');
	t.is(detectNewlineGraceful(), '\n');
	t.is(detectNewlineGraceful(0), '\n');
	t.is(detectNewlineGraceful(true), '\n');
	t.is(detectNewlineGraceful(['foo', 'bar']), '\n');
});
