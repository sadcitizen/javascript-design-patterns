/**
 * Object Literal Module Pattern
 * Модуль в виде литерала объекта
 * */
var calculatorLiteral = {
    /**
     * Локальной области видимости нет,
     * потому нет возможности создавать приватные свойтсва
     * */
    add: function (x, y) {
        return x + y;
    },

    subtract: function (x, y) {
        return x - y;
    },

    multiply: function (x, y) {
        return x * y;
    },

    divide: function (x, y) {
        return x / y;
    },

    PI: 3.1415926
};

/**
 *  Модуль в виде объекта, который возвращает функция
 * */
var calculatorFunc = (function () {
    /**
     * Приватные свойства
     * */
    function abs(value) {
        return value > 0 ? value : -value;
    }

    /**
     * Публичные свойства
     * */
    return {
        add: function (x, y) {
            return x + y;
        },

        subtract: function (x, y) {
            /**
             * Публичный метод использует приватный метод, при этом приватный метод недоступен
             * */
            return abs(x - y);
        },

        multiply: function (x, y) {
            return x * y;
        },

        divide: function (x, y) {
            return x / y;
        },

        PI: 3.1415926
    }

})();

/**
 * Revealing Module Pattern
 * Улучшенный вариант предыдущей реализации.
 * Все свойства приватны, в конце определения модуля
 * определяется каким свойствам открыть доступ
 * */
var calculatorReleaving = (function () {

    var PI = 3.1415926;

    /**
     * Приватные методы
     * */
    function abs(value) {
        return value > 0 ? value : -value;
    }

    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return abs(x - y);
    }

    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        return x / y;
    }

    function ringLength(radius) {
        return 2 * PI * radius;
    }

    /**
     * Открытие доступа
     * */
    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        ringLength: ringLength
    };
})();

/**
 * Модуль, возвращающий конструктор
 * */
var calculatorCtor = (function () {

    function Calculator() {
        /**
         * Инициализация
         * */
    }

    /**
     * Приватные свойства
     * */
    var PI = 3.1415926;

    function abs(value) {
        return value > 0 ? value : -value;
    }

    /**
     * Публичные свойства вносятся в прототип
     * */
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };

    Calculator.prototype.subtract = function (x, y) {
        /**
         * Публичный метод использует приватный метод, при этом приватный метод недоступен
         * */
        return abs(x - y);
    };

    Calculator.prototype.multiply = function (x, y) {
        return x * y;
    };

    Calculator.prototype.divide = function (x, y) {
        return x / y;
    };

    /**
     * Возвращаем конструктор
     * */
    return Calculator;
})();