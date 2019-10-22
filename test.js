import test from 'ava';
import detectNewline from '.';

test('main', t => {
	t.is(detectNewline('foo\r\nbar\r\nbaz\n\n\n'), '\n');
	t.is(detectNewline('foo\r\nbar\r\nbaz\n'), '\r\n');
	t.is(detectNewline('foo\nbar\nbaz\r\n'), '\n');
	t.is(detectNewline('foo\nbar\r\n'), '\n');
	t.is(detectNewline('foo'), undefined);
});

test('graceful', t => {
	t.is(detectNewline.graceful('foo'), '\n');
	t.is(detectNewline.graceful('foo\r\nbar\r\nbaz\n'), '\r\n');
	t.is(detectNewline.graceful(null), '\n');
	t.is(detectNewline.graceful(undefined), '\n');
	t.is(detectNewline.graceful(), '\n');
	t.is(detectNewline.graceful(0), '\n');
	t.is(detectNewline.graceful(true), '\n');
	t.is(detectNewline.graceful(['foo', 'bar']), '\n');
});
