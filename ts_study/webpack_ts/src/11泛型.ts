(() => {
    function getArr<T>(value: T, count: number): T[] {
        const arr: Array<T> = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }

    const arr1 = getArr<number>(222, 2)
    const arr2 = getArr<string>('aa', 2)


    function getMsg<K, V>(value1: K, value2: V) {
        return { value1, value2 }
    }

    getMsg<number, string>(1, "aa")
})()