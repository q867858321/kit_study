
(() => {
    interface IFly {
        fly()
    }
    class Person implements IFly {
        // 实现接口中的方法
        fly() {
            console.log("我会飞了")
        }
    }
    const person = new Person()

    interface ISwim {
        swim()
    }

    // 一个类同时多个接口约束
    class Person2 implements IFly, ISwim {
        swim() {
            console.log("我会游泳了")
        }
        fly() {
            console.log("我会飞了")
        }
    }

    //接口继承
    interface IMyFlyAndSwim extends IFly, ISwim {

    }
    class Person3 implements IMyFlyAndSwim {
        fly() {
            console.log("我会飞了")
        }
        swim() {
            console.log("我会游泳了")
        }
    }

})()