import {expectType} from 'tsd';
import detectNewline = require('.');

expectType<'\r\n' | '\n' | undefined>(detectNewline('foo\nbar\nbaz\r\n'));
expectType<'\r\n' | '\n'>(detectNewline.graceful('foo\nbar\nbaz\r\n'));
expectType<'\n'>(detectNewline.graceful(null));
expectType<'\n'>(detectNewline.graceful(undefined));
expectType<'\n'>(detectNewline.graceful());
expectType<'\n'>(detectNewline.graceful(1));
expectType<'\n'>(detectNewline.graceful(['foo', 'bar']));
