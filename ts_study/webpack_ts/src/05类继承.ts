(() => {
    class Person {
        name: string
        age: number
        gender: string
        constructor(name: string, age: number, gender: string) {
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHi(str: string) {
            console.log(`我是${this.name},${str}`)
        }
    }
    class Student extends Person {
        constructor(name: string, age: number, gender: string) {
            super(name, age, gender)
        }
        sayHi() {
            console.log(`我是学生类的sayHi`)
            super.sayHi('aa')
        }
    }

    const student = new Student("小明", 12, '男');
})()