(() => {
    // public
    //private  私有  子也无法访问
    //protected  受保护的  子可以访问
    //readonly   外部
    class Person {
        public name: string
        readonly age: number = 1
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        eat() {
            console.log("222", this.name)
        }
    }

    const per = new Person('aaa', 12)
    per.eat()
    console.log('object :>> ', per.name);
})()