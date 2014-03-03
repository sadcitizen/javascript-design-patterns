/**
 * Калькулятор - Состояние
 */
var Calculator = (function() {

    function Calculator(state) {
        this._state = state;
    }

    Calculator.prototype.set = function (state) {
        this._state = state;
    };

    Calculator.prototype.execute = function () {
        return this._state.execute.apply(this, arguments);
    };

    return Calculator;
})();

/**
 * Класс, который выполняет сложение
 * */
var Add = (function () {

    function Add() {
    }

    Add.prototype.execute = function (x, y) {
        return x + y;
    };

    return Add;
})();

/**
 * Класс, который выполняет вычитание
 * */
var Subtract = (function () {

    function Subtract() {
    }

    Subtract.prototype.execute = function (x, y) {
        return x - y;
    };

    return Subtract;
})();

/**
 * Класс, который выполняет умножение
 * */
var Multiply = (function () {

    function Multiply() {
    }

    Multiply.prototype.execute = function (x, y) {
        return x * y;
    };

    return Multiply;
})();

/**
 * Класс, который выполняет деление
 * */
var Divide = (function () {

    function Divide() {
    }

    Divide.prototype.execute = function (x, y) {
        return x / y;
    };

    return Divide;
})();