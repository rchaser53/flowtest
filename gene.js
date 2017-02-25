// @flow
function* Gene():Generator<number,*,string> {
//function* Gene(){
  const abc = yield 23;
  console.log(abc, 111)
  return 'poyo'
}

const gene = Gene();
//gene.next();
//gene.next();
