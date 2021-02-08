
(() => {
    interface IPerson {
        readonly id: number, //只读
        name: string,
        age: number,
        sex?: string//可有可无
    }
    const person: IPerson = {
        id: 1,
        name: "aaa",
        age: 18,
    }

    person.sex = "女"
    console.log("person", person)
})()