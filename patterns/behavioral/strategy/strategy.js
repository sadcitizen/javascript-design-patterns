/**
 * Калькулятор - стратегия
 * */
var Calculator = (function () {

    function Calculator() {

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
    Calculator.prototype.set = function (name, method) {
        if (this._methods[name] === undefined) {
            this._methods[name] = method;
        }
    };

    Calculator.prototype.execute = function (name, x, y) {
        if (this._methods[name]) {
            return this._methods[name](x, y);
        }
    };

    return Calculator;
})();