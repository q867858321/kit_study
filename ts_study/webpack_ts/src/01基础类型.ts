(() => {
    console.log("测试")
    let num: number = undefined
    console.log("num", num)

    let un: undefined = undefined
    let arr1: number[] = [1, 2, 3, null, undefined]
    let arr2: Array<number> = [1, 2, 3]
    console.log("arr1", arr1, arr1.length)

    enum Color {
        red, green, blue
    }
    let color: Color = Color.red;
    console.log("color", color, Color.green, Color[2])


    let arr3: any[] = [1, 'a']
    console.log("arr3", arr3)

    function showMsg(): void {
        console.log("aa")
    }
    showMsg()

    function showObj(obj: Object): Object {
        return {
            name: "a",
            age: 12
        }
    }

    function getString(str: number | string): string {
        console.log(222)
        return str.toString()
    }
    console.log(getString(1))


    // 类型断言 <类型>变量名
    //        变量名 as 类型
    function getString2(str: number | string): number {
        if ((<string>str).length) {
            // return (<string>str).length
            return (str as string).length
        } else {
            return str.toString().length
        }
    }

    // 类型推断
    // let txt = 222
    // txt='333'
    let txt = null;
    txt = '333'

})()