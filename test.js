import test from 'ava';
import detectNewline from '.';

test('main', t => {
	t.is(detectNewline('foo\r\nbar\r\nbaz\n\n\n'), '\n');
	t.is(detectNewline('foo\r\nbar\r\nbaz\n'), '\r\n');
	t.is(detectNewline('foo\nbar\nbaz\r\n'), '\n');
	t.is(detectNewline('foo\nbar\r\n'), '\n');
	t.is(detectNewline('foo'), null);
	t.is(detectNewline.graceful('foo'), '\n');
});
