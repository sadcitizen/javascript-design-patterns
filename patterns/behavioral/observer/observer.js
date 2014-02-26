var Observer = (function () {
    /**
     * Создает экземпляр наблюдателя
     * @constructor
     */
    function Observer() {
        this._handlers = [];
    }

    /**
     * Добавляет подписчика
     * @param {function} handler Функция-подписчик
     * @returns {Observer}
     */
    Observer.prototype.subscribe = function (handler) {
        this._handlers.push(handler);
        return this;
    };

    /**
     * Удаляет подписчика
     * @param {function} handler Функция-подписчик
     * @returns {Observer}
     */
    Observer.prototype.unsubscribe = function (handler) {
        var i = 0, length = this._handlers.length;

        for (; i < length; i++) {
            if (this._handlers[i] === handler) {
                this._handlers.splice(i, 1);
                break;
            }
        }

        return this;
    };

    /**
     * Инициирует запуск всех подписчиков (Публикует)
     * @param {*} data Данные, которые будут переданы в подписчики
     * @returns {Observer}
     */
    Observer.prototype.publish = function (data) {
        var i = 0, length = this._handlers.length;

        for (; i < length; i++) {
            this._handlers[i](data);
        }

        return this;
    };

    /**
     * Удаляет подписчиков
     * @returns {Observer}
     */
    Observer.prototype.reset = function () {
        this._handlers = [];
        return this;
    };

    return Observer;
})();