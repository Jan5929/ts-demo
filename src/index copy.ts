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
/*
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
*/
/*
type Gender = '男' | '女'
type User = {
  name: string,
  age: number
  gender: Gender
}
let u: User
function getUsers(g:Gender): User[] {
  return []
}
getUsers('男')
*/

// /**
//  * 得到a和b相乘的结果
//  * @param a
//  * @param b
//  */

// function combine(a: number, b: number): number;
// function combine(a: string, b: string):string;
// function combine(a: number | string, b: number | string): number | string {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a * b
//   } else if (typeof a === 'string' && typeof b === 'string') {
//     return a + b
//   }
//   throw new Error('a 和 b 必须是相同的类型')
// }

// const result = combine(3, 5)

// function sum(a: number, b: number, c: number = 0) {
//   return a + b + c
// }
// sum(3, 5)
// sum(3, 5, 7)

// enum Gender {
//   Male = "帅哥",
//   female = "美女"
// }
// // type Gender = "男" | "女"
// let gender: Gender;

// function printGender() {
//   const valS = Object.values(Gender)
//   valS.forEach((val) => {console.log(val)})
// }
// printGender()
// // function searchUsers(g: Gender) {

// // }

// enum Level {
//   Level1,
//   Level2,
//   Level3

// }
// let l: Level = Level.Level1
// l = Level.Level3
// console.log(l)

// function getLevel(lev: Level) {

// }

// 模块化

// import { sum, name } from './myModules'

// console.log(name, sum(2, 4))

// import fs from 'fs'

// fs.readFileSync('./')

// 接口
// interface User {
//   name: string
//   age: number,
//   sayHello: () => void
// }

// // 类型别名
// type User = {
//   name: string
//   age: number
// }

// type Condition = (n:number) => boolean
// interface Condition {
//   (n:number): boolean
// }
// let u: User = {
//   name: 'Jay',
//   age: 12,
//   sayHello:() => {}
// }
// function sun(numbers: number[], callback: Condition) {
//   let s = 0;
//   numbers.forEach(n => {
//     if (callback(n)) {
//       s += n
//     }
//   })
//   return s
// }
// const result = sun([3, 4, 5, 7, 11], n => n % 2 !== 0)
// console.log(result)

// interface A {
//   T1: string
// }
// interface B {
//   T2: number
// }
// interface C extends A,B {
//   T3: boolean
// }
// let u: C = {
//   T2: 1,
//   T3: true,
//   T1: '234'
// }

// interface UserS {
//   readonly id: string,
//   name: string,
//   age: number
// }

// let u: UserS = {
//   id: '1',
//   name: 'jay',
//   age: 26
// }
// console.log(u)

// const arr: readonly number[] = [1, 2, 3]

// const arr: ReadonlyArray<number> = [1, 2, 4]

// type UserS = {
//   readonly id: string,
//   name: string,
//   age: number,
//   readonly arr: readonly string[]
// }

// let u: UserS = {
//   id: '13',
//   name: 'A',
//   age: 33,
//   arr: ['2', '1']
// }

// interface Duck {
//   sound: '嘎嘎嘎',
//   swIn(): void
// }
// let person = {
//   name: '伪装成鸭子的人',
//   age: 11,
//   sound: '嘎嘎嘎' as '嘎嘎嘎', // 类型断言
//   swIn() {
//     console.log(this.name + '正在游泳, 并发出了' + this.sound + '的声音')
//   }
// }

// let duck: Duck = person

// interface User {
//   name?: string
//   age: number
// }
// let obj = {
//   nema: 'a',
//   age: 33
// }
// let u: User = obj
