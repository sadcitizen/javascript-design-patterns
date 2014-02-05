var ClosureSingleton = new function () {
    var instance;

    // Конструктор
    function ClosureSingleton() {
        if (!instance) {
            instance = this;
        } else {
            return instance;
        }
    }

    // Приватные методы и свойства
    function _privateMethod() {
        //
    }

    // Публичные методы
    ClosureSingleton.prototype.toString = function () {
        return '[object ClosureSingleton]';
    };

    return ClosureSingleton;
};