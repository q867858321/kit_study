(() => {
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        run(distance: number = 0) {
            console.log(`跑了${distance}米 animal`)
        }
    }
    class Dog extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number = 10) {
            console.log(`跑了${distance}米 dog`)
        }
    }
    class Pig extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number = 10) {
            console.log(`跑了${distance}米 pig`)
        }
    }

    const dog1: Animal = new Dog('小黄')
    // dog1.run()


    function showRun(ani: Animal) {
        ani.run()
    }
    showRun(dog1)
})()