/**
 * Медиатор с каналами
 * */
var Mediator = (function () {
    /**
     * Хранилище каналов.
     * Канал представляет собой объект с двумя свойствами:
     * handlers - обработчики этого канала
     * nested - вложенные каналы
     * */
    var handlers = {};

    /**
     * @constructor
     * */
    function Mediator () {

    }

    /**
     * Добавляет подписчик в медиатор
     *
     * @this {Mediator}
     * @param {string} channel Канал, на который подписывается обработчик
     * @param {function} handler Обработчик
     * @param {object} context Контекст выполнения обработчика
     * @return {object} Ссылка на объект-медиатор для цепочки вызовов
     * */
    Mediator.prototype.on = function (channel, handler, context) {

        return this;
    };

    /**
     * Удаляет подписчики из медиатора
     *
     * @this {Mediator}
     * @param {string} channel Канал, обработчики которого будут удалены
     * @return {object} Ссылка на объект-медиатор для цепочки вызовов
     */
    Mediator.prototype.off = function(channel) {

        return this;
    };

    /**
     * @this {Mediator}
     * @return {object} Ссылка на объект-медиатор для цепочки вызовов
     */
    Mediator.prototype.broadcast = function(data) {

        return this;
    };

    /**
     * Вызывает обработчики для конкретного канала с передачей в них данных
     *
     * @this {Mediator}
     * @param {string} channel Канал, обработчики которого будут вызваны
     * @param {object} data Объект с данными, который будет передан в качестве аргумента в обработчики
     * @return {object} Ссылка на объект-медиатор для цепочки вызовов
     */
    Mediator.prototype.trigger = function(channel, data) {

        return this;
    };

    /**
     * Удаление все обработчиков из медиатора
     *
     * @this {Mediator}
     * @return {object} Ссылка на объект-медиатор для цепочки вызовов
     */
    Mediator.prototype.clean = function (){
        handlers = {};
        return this;
    };

    return Mediator;
})();


/**
 * Пример использования
 * */
var m = new Mediator();

/**
 * Добавляем обработчик
 * */
m.on('hello', function (data) {
    console.log('Эти данные пришли из медиатора: ' + data.name);
}, this);

/**
 * Вызываем обработчик
 * */
m.trigger('hello', { name: 'Аполлинария Лаодикийский' });
