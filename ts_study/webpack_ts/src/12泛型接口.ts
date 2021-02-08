(() => {
    class User {
        id?: number
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }


    interface IBaseCRUD<T> {
        data: Array<T>
        add: (t: T) => T
        getUserId: (id: number) => T
    }
    class UserCRUD implements IBaseCRUD<User> {
        data: Array<User> = []
        add(user: User): User {
            user.id = Math.random()
            this.data.push(user)
            return user
        }
        getUserId(id: number): User {
            return this.data.find(user => { user.id == id })
        }
    }
})()