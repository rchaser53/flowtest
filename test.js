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




// for文内のcontinueでのearly returnはNG
const abc = (arg: (string | number)[]) => {
  for (let i=0;i<arg.length;i++) {
    if (typeof arg[i] === 'string') continue;
    const abc: number = arg[i];
  }
}

// if文のearly returnはOK
const abc2 = (arg: (string | number)[]) => {
 if (typeof arg[0] === 'string') return;
 const abc: number = arg[0];
}

type CastType = <T>(arg: any) => T;
type Before = {
  a: string;
}
type After = {
  a: number;
}

const castAfter: CastType = <After>(arg: any) => arg
const before = {
  a: "a"
}

//const after: After = castAfter(before);
//after.a.toString()
//after.a.replace('','')

//type createSagaTowerStore: (route: Route) => Store;
