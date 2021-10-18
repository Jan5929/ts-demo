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

