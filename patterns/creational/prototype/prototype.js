/**
 * Базовый класс
 * */
var Person = (function () {

    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    Person.prototype.introduce = function () {
        return 'My name is ' + this.firstname + ' ' + this.lastname;
    };

    return Person;
})();

/**
 * Прототип
 * */
var Proto = (function () {

    function Proto (person) {
        this.person = person;
    }

    Proto.prototype.clone = function() {
        var f = function () {};
        f.prototype = this.person;
        return new f();
    };

    return Proto;
})();

/**
 * Использование:
 * var john = new Person('John', 'Smith'),
 *     johnPrototype = new Proto(john),
 *     johnClone = johnPrototype.clone();
 *
 * console.log(johnClone.introduce());
 * johnClone будет клоном объекта john
 * */