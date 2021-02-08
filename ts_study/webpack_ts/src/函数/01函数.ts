(() => {
    function add(x, y) {
        return x + y
    }
    const add2 = function (x: number, y: number): number {
        return x + y
    }
    const add3: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y
    }


    //默认参数 ，可选参数
    const getFullName = function (firstName: string = '东方', lastName?: string): string {
        if (lastName) {
            return firstName + "_" + lastName
        } else {
            return firstName
        }
    }
    console.log(getFullName())

    function showMsg(str: string, ...args: string[]) {

    }
    showMsg("a", 'b', 'c')

    // 重载函数声明
    function add4(x: string, y: string): string
    function add4(x: number, y: number): number
    function add4(x: string | number, y: string | number): string | number {
        // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y
        }
    }

    console.log(add4(1, 2))
    console.log(add4('a', 'b'))
})()