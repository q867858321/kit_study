(() => {
    class Person {
        name: string
        age: number
        gender: string
        constructor(name: string = '小甜甜', age: number = 0, gender: string = '女') {
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHi(str: string) {
            console.log(`${this.name},${this.age},${str}`)
        }
    }

    const person1 = new Person('aa', 12, "男")
    console.log("person1", person1)
    person1.sayHi('ss')

})()