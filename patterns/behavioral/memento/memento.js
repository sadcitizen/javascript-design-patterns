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

    function Memento(state) {
        this.jsonState = JSON.stringify(state);
    }

    Memento.prototype.getState = function () {
        return this.jsonState;
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
    };

    Caretaker.prototype.get = function(index) {
        var ind = parseInt(index, 10);
        return this.mementos[isNaN(ind) ? this.mementos.length - 1 : ind];
    };

    Caretaker.prototype.clean = function () {
        this.mementos = [];
    };

    return Caretaker;
})();