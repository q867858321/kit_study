(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + "_" + this.lastName;
        }
        return Person;
    }());
    var person = new Person('诸葛', '孔明');
});
