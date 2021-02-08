(() => {
    class Person {
        static name1: string = "大"
        constructor(name: string) {

        }
        sayHi() {
            console.log("2222")
        }
    }
    const person: Person = new Person("小");
    console.log(Person.name1)
})()