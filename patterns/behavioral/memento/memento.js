/**
 * Originator
 * */
var Person = (function () {

    function Person(name, address) {
        this.name = name;
        this.address = address;
    }

    Person.prototype.move = function(newAddress) {
        this.address = newAddress;
    };

    Person.prototype.whereami = function () {
        return this.address;
    };

    Person.prototype.save = function () {
        return new Memento(this);
    };

    Person.prototype.restore = function (memento) {
        if (memento === undefined) {
            throw new Error('Saved state is not found!');
        }
        var state = JSON.parse(memento.getState());

        this.name = state.name;
        this.address = state.address;
    };

    return Person;
})();

/**
 * Memento
 * */
var Memento = (function () {

    var jsonState;

    function Memento(state) {
        jsonState = JSON.stringify(state);
    }

    Memento.prototype.getState = function () {
        return jsonState;
    };

    return Memento;
})();

/**
 * Caretaker /
 * */
var Caretaker = (function (){

    function Caretaker() {
        this.mementos = [];
    }

    Caretaker.prototype.set = function(memento) {
        this.mementos.push(memento);
        return this;
    };

    Caretaker.prototype.get = function(index) {
        var ind = parseInt(index, 10);
        return this.mementos[isNaN(ind) ? this.mementos.length - 1 : ind];
    };

    return Caretaker;
})();

/**
 * Использование
 * */

var john = new Person('John', '1600 Pennsylvania Ave NW, Washington, DC 20500');
console.log(john.whereami()); // => '1600 Pennsylvania Ave NW, Washington, DC 20500'
var johnCareTaker = new Caretaker();
johnCareTaker.set(john.save());

john.move('935 Pennsylvania Ave NW, Washington, District of Columbia 20535');
console.log(john.whereami()); // => '935 Pennsylvania Ave NW, Washington, District of Columbia 20535'
johnCareTaker.set(john.save());


debugger;
/*john.restore(johnCareTaker.get());
console.log(john.whereami()); // => '1600 Pennsylvania Ave NW, Washington, DC 20500'

john.restore(johnCareTaker.get(0));
console.log(john.whereami()); // => '935 Pennsylvania Ave NW, Washington, District of Columbia 20535'*/