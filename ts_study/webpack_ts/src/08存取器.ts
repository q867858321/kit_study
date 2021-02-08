(() => {
    class Person {
        firstName: string
        lastName: string
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }
        get fullName() {
            return this.firstName + "_" + this.lastName
        }
        set fullName(val: string) {
            let arr = val.split("_")
            this.firstName = arr[0]
            this.firstName = arr[1]
        }
    }
    let person = new Person("东方", '不败')
    person.fullName = "东方_sss"
    console.log("fullName", person.fullName)
})()