/**
 * Класс, который отвечает за передачу запроса
 * */
var RequestResponse = (function () {

    /**
     * Создает экземпляр
     * @constructor
     */
    function Reqres () {
        /**
         * Хранилище запросов
         * @private
         * */
        this._requests = {};
    }

    /**
     * Задает обработчик запроса
     * @param {string} name Имя запроса
     * @param {function} handler Обработчик запроса
     * @param {*} context Контекст запроса
     * @returns {RequestResponse}
     */
    Reqres.prototype.setResponse = function (name, handler, context) {

        if (!this._requests.hasOwnProperty(name)) {
            this._requests[name] = {
                fn: handler,
                context: context
            };
        } else {
            throw new Error('The response already exists!');
        }

        /**
         * На один запрос может быть только один ответ
         * */
        return this;
     };

    /**
     * Удаляет обработчик запроса
     * @param {string} name Имя запроса
     * @returns {RequestResponse}
     */
    Reqres.prototype.removeResponse = function (name) {
        if (this._requests.hasOwnProperty(name)) {
            this._requests[name] = undefined;
        }

        return this;
    };

    /**
     * Делает запрос.
     * @param {string} name Имя запроса
     * @param {*} data Данные, которые передаются в запрос
     * @returns {*} Результат выполнения обработчика запроса
     */
    Reqres.prototype.request = function (name, data) {
        if (this._requests.hasOwnProperty(name)) {
            return this._requests[name].fn.call(this._requests[name].context, data);
        } else {
            throw new Error('The request does not exist!');
        }
    };

    /**
     * Очищает хранилище запросов
     */
    Reqres.prototype.clean = function () {
        this._requests = {};
    };

    return Reqres;
})();

/**
 * Сервер
 * */
var Server = (function () {

    /**
     * @param {RequestResponse} reqres Экзампляр хранителя запросов
     * @constructor
     *
     * В сервер инжектирован экзепмляр RequestResponse
     * Сервер не знает кто к нему обращается
     */
    function Server(reqres) {
        this._reqres = reqres;

        /**
         * Задаем обработчики запросов
         * */
        this._reqres
            .setResponse('add', function (data) {
                return data.x + data.y;
            })
            .setResponse('subtract', function (data) {
                return data.x - data.y;
            })
            .setResponse('multiply', function (data) {
                return data.x * data.y;
            })
            .setResponse('divide', function (data) {
                return data.x / data.y;
            });
    }

    return Server;
})();

/**
 * Клиент
 * */
var Client = (function () {

    /**
     * @param {RequestResponse} reqres Экзампляр хранителя запросов
     * @constructor
     *
     * В клиент инжектирован экзепмляр RequestResponse
     * Клиент ничего не знает о сервере
     */
    function Client(reqres) {
        this._reqres = reqres;
    }

    /**
     * Возвращает результат запроса на сложение двух чисел
     * @param {number} x Первый операнд
     * @param {number} y Второй операнд
     * @returns {*} Результат запроса
     */
    Client.prototype.add = function(x, y) {
        return this._reqres.request('add', { x: x, y: y });
    };

    /**
     * Возвращает результат запроса на вычитание двух чисел
     * @param {number} x Уменьшаемое
     * @param {number} y Вычитаемое
     * @returns {*} Результат запроса
     */
    Client.prototype.subtract = function(x, y) {
        return this._reqres.request('subtract', { x: x, y: y });
    };

    /**
     * Возвращает результат запроса на умножение двух чисел
     * @param {number} x Первый операнд
     * @param {number} y Второй операнд
     * @returns {*} Результат запроса
     */
    Client.prototype.multiply = function(x, y) {
        return this._reqres.request('multiply', { x: x, y: y });
    };

    /**
     * Возвращает результат запроса на деление двух чисел
     * @param {number} x Делимое
     * @param {number} y Делитель
     * @returns {*} Результат запроса
     */
    Client.prototype.divide = function(x, y) {
        return this._reqres.request('divide', { x: x, y: y });
    };

    return Client;
})();