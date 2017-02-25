// @flow

type Poyo = {
  [key: string]: number
}

const ppp :Poyo = {
  'aaa': 2
}

type Keys = 'guee' | 'gyan';

type PPP = {
  guee : string;
  [key: Keys]: string
}

const nyan: PPP = {
  guee: '234'
}
const guee = 'guee'
console.log(nyan[guee])
