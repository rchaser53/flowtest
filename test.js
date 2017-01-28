// @flow
import 
{ tanapan } 
from 'del'
(
function() {
	function foo(x: number) {
		return x * 10;
}
//foo("日本");
const test = 'test'
const abc = foo(22);
	}
); 
function aaa() {
	return 23;
}

function *poyo(): Generator<number, void, any> {
	yield aaa()
}
const abcd = poyo();
const def = abcd.next(23)
const fgh = def.value
