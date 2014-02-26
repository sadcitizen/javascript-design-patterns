/**
 * Originator
 * */
var Person = (function () {

    /**
     * Создает экземпляр человека
     * @param {string} name Имя человека
     * @param {string} address Адрес местоположения человека
     * @constructor
     */
    function Person(name, address) {
        this.name = name;
        this.address = address;
    }

    /**
     * Меняет местоположение человека
     * @param {string} newAddress Новое местоположение человека
     */
    Person.prototype.move = function(newAddress) {
        this.address = newAddress;
    };

    /**
     * Возвращает текущее местопложение человека
     * @returns {string}
     */
    Person.prototype.whereami = function () {
        return this.address;
    };

    /**
     * Сохраняет текущее состояние человека в хранитель
     * @returns {Memento}
     */
    Person.prototype.save = function () {
        return new Memento(this);
    };

    /**
     * Откатывает состояние человека до состояния, которое хранится в memento
     * @param memento
     */
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

    /**
     * Создает экземпляр мементо
     * @param {*} state Состояние
     * @constructor
     */
    function Memento(state) {
        this.jsonState = JSON.stringify(state);
    }

    /**
     * Возвращает состояние
     * @returns {*}
     */
    Memento.prototype.getState = function () {
        return this.jsonState;
    };

    return Memento;
})();

/**
 * Caretaker /
 * */
var Caretaker = (function (){

    /**
     * Создает экземпляр класса
     * @constructor
     */
    function Caretaker() {
        this.mementos = [];
    }

    /**
     * Сохраняет переданное в него состояние
     * @param {string} memento Состояние
     */
    Caretaker.prototype.set = function(memento) {
        this.mementos.push(memento);
    };

    /**
     * Возвращает сохраненное состояние по его индексу
     * @param {number} index Индекс сохраненного состояния
     * @returns {*}
     */
    Caretaker.prototype.get = function(index) {
        var ind = parseInt(index, 10);
        return this.mementos[isNaN(ind) ? this.mementos.length - 1 : ind];
    };

    /**
     * Очищает список сохраненных состояний
     */
    Caretaker.prototype.clean = function () {
        this.mementos = [];
    };

    return Caretaker;
})();