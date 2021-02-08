(() => {
    interface IPerson {
        firstName: string,
        lastName: string
    }
    function showFullName(person: IPerson) {
        return person.firstName + '_' + person.lastName
    }
    let ob = {
        firstName: 'a',
        lastName: 'b',
        ssa: 311
    }
    console.log(ob)
    console.log(showFullName(ob))
})()