class User {
  readonly id: number
  gender: '男' | '女' = '男'
  pid?: string
  private _publiShNumber: number = 3 // 每天一共可以发布多少篇文章
  private _curNumber: number = 0 // 当天可以发布的文章数量
  constructor(public name: string, private _age: number) {
    this.id = Math.random()
    this._age = _age
  }
  publish(title: string) {
    if (this._curNumber < this._publiShNumber) {
      console.log('发布一篇文章' + title)
      this._curNumber++
    } else {
      console.log('你今日发布的文章数量已经达到上限')
    }
  }
  set age(value: number) {
    // 设置条件约束
    this._age = value
    if (value < 0) {
      this._age = 0
    } else if (value > 200) {
      this._age = 200
    } else {
      this._age = this.age
    }
  }
  get age() {
    return Math.floor(this._age)
  }
}
const u = new User('Jay', 22)
u.gender = '女'
u.age = 5.5
u.publish('文章1')
u.publish('文章2')
u.publish('文章3')
console.log(u)
