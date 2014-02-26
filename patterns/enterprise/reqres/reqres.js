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
* Пример использования
* */
var reqres = new RequestResponse(),
    server = new Server(reqres);

console.log('Add: ' + reqres.request('add', { x: 22, y: 3 })); // => 25
console.log('Subtract: ' + reqres.request('subtract', { x: 4, y: 3 })); // => 1
console.log('Multiply: ' + reqres.request('multiply', { x: 9, y: 8 })); // => 72
console.log('Divide: ' + reqres.request('divide', { x: 192, y: 3 })); // => 64