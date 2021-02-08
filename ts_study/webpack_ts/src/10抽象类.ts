(() => {
    abstract class Animal {
        abstract name: string
        abstract eat()
        sayHi() {
            alert(3)
        }
    }

    class Dog extends Animal {
        name: string
        eat() {
            console.log(121)
        }

    }

})()