/*
let say = '1231'
console.log(say)

// let name: string;

function add(a: number, b: number) {
  return a + b
}

let num = add(3, 4)

let name = 'kevin'

let phone = '18569437686'

function isOdd(n: number) {
  return n % 2 === 0
}
// 数组
let numS: number[] = [1, 2, 3, 4, 5, 6, 7,];
// 语法糖
let numSS: Array<number> = [123, 132]


// 对象
let u: object
u = {
  name: 'kevin',
  age: 343
}

function printValues(obj:object) {
  const valS = Object.values(obj)
  valS.forEach((val) => {
    console.log(val)
  })
}
printValues(u)

let n: string = 'undefined'

*/

let name: string | undefined;
if (typeof name === 'string') {
  name.toLocaleLowerCase()
}

function printMenu() {
  console.log(1)
  console.log(2)
}

function throwError(msg: string):never {
  throw new Error(msg);
}
function alwaysDoSome(): never {
  while(true) { console}
}

let gender: '男' | '女';

let user: {
  name: string,
  age? :number
}
user = {
  name: 'Jay'
}

// 元祖类型
let tu: [string, number]
tu = ['2', 4]

let data: any = '2342'
let num: number = data
