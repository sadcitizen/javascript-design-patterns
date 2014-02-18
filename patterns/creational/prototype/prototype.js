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
var PersonProto = (function () {

    function Proto (person) {
        this.person = person;
    }

    Proto.prototype.clone = function() {
        var p = new Person();

        p.firstname = this.person.firstname;
        p.lastname = this.person.lastname;

        return p;
    };

    return Proto;
})();

/**
 * Клонирующий
 * */
var Cloner = (function (){

    function Cloner (obj, proto) {
        this.obj = obj;
        this.proto = proto;
    }

    Cloner.prototype.create = function (){
        var cl = new this.proto(this.obj);
        return cl.clone();
    }

    return Cloner;
})();

/**
 * Использование:
 * var john = new Person('John', 'Smith');
 * var cl = new Cloner(john, PersonProto);
 * var johnClone = cl.create();
 * johnClone будет клоном объекта john
 * */