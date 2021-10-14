import {expectType} from 'tsd';
import {detectNewline, detectNewlineGraceful} from './index.js';

expectType<'\r\n' | '\n' | undefined>(detectNewline('foo\nbar\nbaz\r\n'));
expectType<'\r\n' | '\n'>(detectNewlineGraceful('foo\nbar\nbaz\r\n'));
expectType<'\n'>(detectNewlineGraceful(null));
expectType<'\n'>(detectNewlineGraceful(undefined));
expectType<'\n'>(detectNewlineGraceful());
expectType<'\n'>(detectNewlineGraceful(1));
expectType<'\n'>(detectNewlineGraceful(['foo', 'bar']));
