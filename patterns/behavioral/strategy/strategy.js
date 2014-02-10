/**
 * Калькулятор - стратегия
 * */
var Calculator = (function () {

    function Calculator() {

        /**
         * Метод, который будет выполнять стратегия по умолчанию
         * */
        this._method = 'add';

        /**
         * Встроенные алгоритмы
         * */
        this._methods = {
            add: function (x, y) {
                return x + y;
            },

            subtract: function(x, y) {
                return x - y;
            },

            multiply: function (x, y) {
                return x * y;
            },

            divide: function (x, y) {
                return x / y;
            }
        };
    }

    /**
     * Метод, который позволяет добавить новый метод в калькулятор
     * */
    Calculator.prototype.add = function (name, method) {
        if (this._methods[name] === undefined) {
            this._methods[name] = method;
        }

        return this;
    };

    Calculator.prototype.set = function (name) {
        this._method = name;

        return this;
    };

    Calculator.prototype.execute = function (x, y) {
        return this._methods[this._method](x, y);
    };

    return Calculator;
})();