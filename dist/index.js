class User {
    constructor(name, _age) {
        this.name = name;
        this._age = _age;
        this.gender = '男';
        this._publiShNumber = 3;
        this._curNumber = 0;
        this.id = Math.random();
        this._age = _age;
    }
    publish(title) {
        if (this._curNumber < this._publiShNumber) {
            console.log('发布一篇文章' + title);
            this._curNumber++;
        }
        else {
            console.log('你今日发布的文章数量已经达到上限');
        }
    }
    set age(value) {
        this._age = value;
        if (value < 0) {
            this._age = 0;
        }
        else if (value > 200) {
            this._age = 200;
        }
        else {
            this._age = this.age;
        }
    }
    get age() {
        return Math.floor(this._age);
    }
}
const u = new User('Jay', 22);
u.gender = '女';
u.age = 5.5;
u.publish('文章1');
u.publish('文章2');
u.publish('文章3');
console.log(u);
