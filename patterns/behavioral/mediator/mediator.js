/**
 * Медиатор с каналами
 * */
var Mediator = (function () {
    /**
     * Хранилище каналов.
     * Канал представляет собой объект с двумя свойствами:
     * handlers {array} - обработчики этого канала (fn {function} и context {object})
     * nested {object} - вложенные каналы
     * */
    var storage = {},
        sep;

    /**
     * @constructor
     * */
    function Mediator (separator) {
        /**
         * По умолчанию неймспейсы будут разделены двоеточием
         * */
        sep = separator || ':';
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

        this.namespace(channel).handlers.push({
            fn: handler,
            context: context
        });

        return this;
    };

    /**
     * Удаляет подписчики из медиатора
     *
     * @this {Mediator}
     * @param {string} channel Канал, обработчики которого будут удалены
     * @param {boolean} withNested Логическое поле, которое позволяет отключить обработчики каналов-потомков
     * @return {object} Ссылка на объект-медиатор для цепочки вызовов
     */
    Mediator.prototype.off = function(channel, withNested) {

        return this;
    };

    /**
     * @this {Mediator}
     * @param {object} data Объект с данными, который будет передан в качестве аргумента в обработчики
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

    /**
     * Функция для управления пространством имен обработчиков
     *
     * @this {Mediator}
     * @param {string} channel Канал
     * @return {object} current Хранилище обработчиков канала
     * */
    Mediator.prototype.namespace = function (channel) {
        var parts = channel.split(sep),
            length = parts.length,
            i = 0,
            current = storage;

        /**
         * Возвращает объект заданной структуры
         *
         * @return {object}
         * */
        function getUnit() {
            return {
                nested: {},
                handlers: []
            }
        }

        for (; i < length; i++) {
            current[parts[i]] = current[parts[i]] || getUnit();
            current = (i !== length - 1 ? current[parts[i]].nested : current[parts[i]]);
        }

        return current;
    }

    /**
     * Возвращает содержимое объекта с обработчиками. Только для отладки.
     *
     * @this {Mediator}
     * @return {object} storage Хранилище обработчиков
     * */
    Mediator.prototype.getStorage = function() {
        return storage;
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

m.on('hello:world', function(data) {
    console.log('Эти данные пришли из медиатора: ' + data.name);
});

m.on('hello:world', function(data) {
    console.log('Эти данные пришли из медиатора: ' + data.name);
});

m.on('hello:another:world', function(data) {
    console.log('Эти данные пришли из медиатора: ' + data.name);
});

m.on('goodbye', function(data) {
    console.log('Эти данные пришли из медиатора: ' + data.name);
});

m.on('goodbye:world', function(data) {
    console.log('Эти данные пришли из медиатора: ' + data.name);
});

m.on('goodbye:another:world', function(data) {
    console.log('Эти данные пришли из медиатора: ' + data.name);
});

m.on('lorem:ipsum:dolor:sit:amet', function(data) {
    console.log('Эти данные пришли из медиатора: ' + data.name);
});

m.on('lorem:ipsum', function(data) {
    console.log('Эти данные пришли из медиатора: ' + data.name);
});


/**
 * Вызываем обработчик
 * */
m.trigger('hello', { name: 'Аполлинарий Лаодикийский' });
m.trigger('hello:world', { name: 'Вильгельм фон Каульбах' });

console.log(m.getStorage());
