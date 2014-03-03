/**
 * Калькулятор - стратегия
 * */
var Calculator = (function () {

    /**
     * Создает экземпляр
     * @constructor
     */
    function Calculator() {

        /**
         * Встроенные алгоритмы
         * @private
         */
        this._methods = {
            /**
             * Складывает два операнда
             * @param {number} x Первый операнд
             * @param {number} y Второй операнд
             * @returns {number} Сумма
             */
            add: function (x, y) {
                return x + y;
            },

            /**
             * Вычитает из одного операнда другой
             * @param {number} x Уменьшаемое
             * @param {number} y Вычитаемое
             * @returns {number} Разница
             */
            subtract: function (x, y) {
                return x - y;
            },

            /**
             * Перемножает два операнда
             * @param {number} x Первый операнд
             * @param {number} y Второй операнд
             * @returns {number} Произведение
             */
            multiply: function (x, y) {
                return x * y;
            },

            /**
             * Делит один операнд на другой
             * @param {number} x Делимое
             * @param {number} y Делитель
             * @returns {number} Результат
             */
            divide: function (x, y) {
                return x / y;
            }
        };
    }

    /**
     * Добавляет новый метод в калькулятор
     * @param {string} name Имя метода
     * @param {function} method Функция-метод
     * @returns {Calculator}
     */
    Calculator.prototype.set = function (name, method) {
        if (this._methods[name] === undefined) {
            this._methods[name] = method;
        }

        return this;
    };

    /**
     * Вызывает метод и передает в него параметры
     * @param {string} method Имя метода
     * @param {number} x Первый операнд
     * @param {number} y Второй операнд
     * @returns {number} Результат
     */
    Calculator.prototype.execute = function (method, x, y) {
        if (this._methods[method] !== undefined) {
            return this._methods[method](x, y);
        } else {
            throw new Error('Method does not exists!');
        }
    };

    return Calculator;
})();