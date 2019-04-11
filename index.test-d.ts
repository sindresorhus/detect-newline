import {expectType} from 'tsd';
import detectNewline = require('.');

expectType<'\r\n' | '\n' | undefined>(detectNewline('foo\nbar\nbaz\r\n'));
expectType<'\r\n' | '\n'>(detectNewline.graceful('foo\nbar\nbaz\r\n'));
