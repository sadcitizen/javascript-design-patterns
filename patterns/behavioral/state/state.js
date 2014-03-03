/**
 * Калькулятор - Состояние
 */
var Calculator = (function () {

    /**
     * Создает экземпляр
     * @param {object} state Состояние
     * @constructor
     */
    function Calculator(state) {
        this._state = state;
    }

    /**
     * Устанавливает состояние
     * @param {object} state Состояние
     */
    Calculator.prototype.set = function (state) {
        this._state = state;
    };

    /**
     * Вызывает метод execute() у текущего состояния
     * @returns {*|number}
     */
    Calculator.prototype.execute = function () {
        return this._state.execute.apply(this, arguments);
    };

    return Calculator;
})();

/**
 * Класс, который выполняет сложение
 * */
var Add = (function () {

    /**
     * Создает экземпляр
     * @constructor
     */
    function Add() {
    }

    /**
     * Складывает два операнда
     * @param {number} x Первый операнд
     * @param {number} y Второй операнд
     * @returns {number} Сумма
     */
    Add.prototype.execute = function (x, y) {
        return x + y;
    };

    return Add;
})();

/**
 * Класс, который выполняет вычитание
 * */
var Subtract = (function () {

    /**
     * Создает экземпляр
     * @constructor
     */
    function Subtract() {
    }

    /**
     * Вычитает из одного операнда другой
     * @param {number} x Уменьшаемое
     * @param {number} y Вычитаемое
     * @returns {number} Разница
     */
    Subtract.prototype.execute = function (x, y) {
        return x - y;
    };

    return Subtract;
})();

/**
 * Класс, который выполняет умножение
 * */
var Multiply = (function () {

    /**
     * Создает экземпляр
     * @constructor
     */
    function Multiply() {
    }

    /**
     * Перемножает два операнда
     * @param {number} x Первый операнд
     * @param {number} y Второй операнд
     * @returns {number} Произведение
     */
    Multiply.prototype.execute = function (x, y) {
        return x * y;
    };

    return Multiply;
})();

/**
 * Класс, который выполняет деление
 * */
var Divide = (function () {

    /**
     * Создает экземпляр
     * @constructor
     */
    function Divide() {
    }

    /**
     * Делит один операнд на другой
     * @param {number} x Делимое
     * @param {number} y Делитель
     * @returns {number} Результат
     */
    Divide.prototype.execute = function (x, y) {
        return x / y;
    };

    return Divide;
})();