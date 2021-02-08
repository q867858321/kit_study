(function () {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var ob = {
        firstName: 'a',
        lastName: 'b',
        ssa: 3
    };
    console.log(ob);
    console.log(showFullName(ob));
})();
