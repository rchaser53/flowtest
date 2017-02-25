// @flow
interface Poyo {
  a: number;
}

interface Poyo2 {
  a: string;
}

const nya: Poyo = {
  a: 1
}

const nyaa: any = nya;
const nyaaa: Poyo2 = nyaa;


type AAA = <T>(a: any) => T
const aaa: AAA = <Poyo>(a) => a;
const bbb: Poyo2 = aaa(nya);
