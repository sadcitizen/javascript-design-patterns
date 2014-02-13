/**
 * Класс, который будет защищать Proxy
 * */
var Calc = (function () {

    function Calc() {
        /**
         * Инициализация
         * */
    }

    Calc.prototype.add = function (x, y) {
        return x + y;
    };

    Calc.prototype.subtract = function (x, y) {
        return x - y;
    };

    Calc.prototype.multiply = function (x, y) {
        return x * y;
    };

    Calc.prototype.divide = function (x, y) {
        return x / y;
    };

    Calc.prototype.power = function (x, y) {
        return Math.pow(x, y);
    };

    Calc.prototype.root = function (x, y) {
        return this.power(x, this.divide(1, y));
    };

    return Calc;
})();

/**
 * Класс, который выступает в роли суррогата класса Calc
 * */
var CalcProxy = (function () {

    var calc;

    function Proxy() {
        calc = null;
    }

    /**
     * Экземпляр calc будет недоступен из вне.
     * Он хранится в замыкании.
     * Будет инициализирован только при первом обращении.
     * */
    function initialize() {
        if (calc === null) {
            calc = new Calc();
        }
    }

    function parse(value) {
        value = parseInt(value, 10);
        if (isNaN(value)) {
            throw new Error('Arguments are invalid!');
        } else {
            return value;
        }
    }

    Proxy.prototype.add = function (x, y) {
        initialize();
        return calc.add(parse(x), parse(y));
    };

    Proxy.prototype.subtract = function (x, y) {
        initialize();
        return calc.subtract(parse(x), parse(y));
    };

    Proxy.prototype.multiply = function (x, y) {
        initialize();
        return calc.multiply(parse(x), parse(y));
    };

    Proxy.prototype.divide = function (x, y) {
        initialize();
        y = parse(y);

        if (y === 0) {
            throw new Error('Division by zero!');
        }

        return calc.divide(parse(x), y);
    };

    Proxy.prototype.power = function (x, y) {
        initialize();
        return calc.power(parse(x), parse(y));
    };

    Proxy.prototype.root = function (x, y) {
        initialize();
        y = parse(y);

        if (y < 0) {
            throw new Error('Negative power!');
        }

        return calc.root(parse(x), y);
    };

    return Proxy;
})();