import test from 'ava';
import m from './';

test(t => {
	t.is(m('foo\r\nbar\r\nbaz\n\n\n'), '\n');
	t.is(m('foo\r\nbar\r\nbaz\n'), '\r\n');
	t.is(m('foo\nbar\nbaz\r\n'), '\n');
	t.is(m('foo\nbar\r\n'), '\n');
	t.is(m('foo'), null);
	t.is(m.graceful('foo'), '\n');
});
